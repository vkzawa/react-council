import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../api";
import SiteNav from "../SiteNav";

class SiteNavContainer extends Component {
  componentDidMount() {
    this.props.loadMenu(api.Menus.bySlug("main"));
  }

  render() {
    if (this.props.mainMenu) {
      return <SiteNav menu={this.props.mainMenu} />;
    }

    return null;
  }
}

const mapStateToProps = state => ({
  mainMenu: state.api.menus.main
});

const mapDispatchToProps = dispatch => ({
  loadMenu: menu => dispatch({ type: "LOAD_MENU", payload: menu })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteNavContainer);
