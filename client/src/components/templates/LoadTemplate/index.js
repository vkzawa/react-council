///////////////////////////////////////////////////////
// Fetches data from API and renders template
// based on properties passed from router.
// Also handles loading meta data per template.
///////////////////////////////////////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import queryString from "qs";

import AsyncChunks from "../../utilities/AsyncLoader";
import canUseDom from "../../../utilities/canUseDom";
import api from "../../../api";

const AsyncDefault = AsyncChunks.generateChunk(() =>
  import(/* webpackChunkName: "Default" */ "../Default")
);

const AsyncHome = AsyncChunks.generateChunk(() =>
  import(/* webpackChunkName: "Home" */ "../Home")
);

const AsyncPost = AsyncChunks.generateChunk(() =>
  import(/* webpackChunkName: "Post" */ "../Post")
);

const AsyncEvent = AsyncChunks.generateChunk(() =>
  import(/* webpackChunkName: "Post" */ "../Event")
);

const AsyncCalendar = AsyncChunks.generateChunk(() =>
  import(/* webpackChunkName: "Calendar" */ "../Calendar")
);

const templates = {
  home: AsyncHome,
  default: AsyncDefault,
  post: AsyncPost,
  event: AsyncEvent,
  calendar: AsyncCalendar
};

const mapStateToProps = state => ({
  data: state.api.data
});

const mapDispatchToProps = dispatch => ({
  load: data => dispatch({ type: "LOAD_DATA_BY_SLUG", payload: data })
});

class LoadTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: false,

      // Slug will either come from a prop or a URL param from Router
      // Necessary because some slugs come from URL params
      slug: this.props.slug ? this.props.slug : this.props.match.params.slug
    };

    this.fetchData();
  }

  checkForPreview() {
    if (canUseDom) {
      let params = [];

      params = queryString.parse(window.location.search, {
        ignoreQueryPrefix: true
      });

      if (params.preview === "true" && params["_wpnonce"]) {
        api.Content.previewDataBySlug(
          this.props.type,
          this.state.slug,
          params["_wpnonce"]
        ).then(
          res => {
            this.setState({ preview: res });
          },
          error => {
            console.warn(error);
            this.props.history.push("/not-found");
          }
        );
      }
    }
  }

  fetchData() {
    if (!this.props.data[this.props.type][this.state.id]) {
      // Load page content from API by slug
      api.Content.dataBySlug(this.props.type, this.state.slug).then(
        res => {
          let data = Array.isArray(res) ? res[0] : res;

          this.setState({
            id: data.id
          });

          this.props.load({
            type: this.props.type,
            slug: this.state.slug,
            id: data.id,
            data: data
          });
        },
        error => {
          console.warn(error);
        }
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({
        slug: this.props.match.params.slug
      });
    }
  }

  render() {
    this.checkForPreview();
    let data = this.state.preview;

    if (
      !this.state.preview &&
      this.props.data[this.props.type] &&
      this.props.data[this.props.type][this.state.id]
    ) {
      data = this.props.data[this.props.type][this.state.id];
    }

    let Meta = () => null;

    const Template = templates[this.props.template];

    if (!Template) {
      return <Redirect to="/not-found" />;
    }

    if (data.acf) {
      Meta = () => {
        return (
          <Helmet>
            <title>{data.acf.metaTitle}</title>
            <meta name="description" content={data.acf.metaDescription} />
            <meta name="keywords" content={data.acf.metaKeywords} />
          </Helmet>
        );
      };
    }

    return (
      <div className="template-wrap">
        <Meta />
        <Template data={data} slug={this.state.slug} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadTemplate);
