import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../api";
import PostList from "../PostList";

const HOT_TOPICS_CATEGORY_ID = "83";

class HotTopicPosts extends Component {
  componentDidMount() {
    this.props.loadPosts(
      api.Content.dataByCategory("posts", HOT_TOPICS_CATEGORY_ID, "&sticky=1")
    );
  }

  render() {
    if (this.props.posts) {
      return <PostList posts={this.props.posts} />;
    }

    return null;
  }
}

const mapStateToProps = state => ({
  posts: state.api.lists.posts.hotTopics
});

const mapDispatchToProps = dispatch => ({
  loadPosts: posts => dispatch({ type: "LOAD_HOT_TOPICS_LIST", payload: posts })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotTopicPosts);
