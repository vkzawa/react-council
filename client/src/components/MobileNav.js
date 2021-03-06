import React, { Component } from "react";
import styled from "styled-components";
import SiteNavContainer from "./containers/SiteNavContainer";

// Material UI
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

class MobileNav extends Component {
  state = {
    mobileMenuOpen: false
  };

  toggleMobileMenu = open => () => {
    this.setState({
      mobileMenuOpen: open
    });
  };

  render() {
    return (
      <React.Fragment>
        <MobileMenuButton color="primary" onClick={this.toggleMobileMenu(true)}>
          <MenuIcon />
        </MobileMenuButton>

        <SwipeableDrawer
          className="MobileNavStyles-swipeableDrawer"
          anchor="bottom"
          open={this.state.mobileMenuOpen}
          onClose={this.toggleMobileMenu(false)}
          onOpen={this.toggleMobileMenu(true)}
        >
          <div onClick={this.toggleMobileMenu(false)}>
            <List>
              <SiteNavContainer />
            </List>

            <Divider />

            <List>
              <ListItem>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                {/* <QuickSearch /> */}
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
}

const MobileMenuButton = styled(Fab)`
  && {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 999;
  }
`;

export default MobileNav;
