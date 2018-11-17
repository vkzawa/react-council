import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import he from 'he';
import SiteNavItemsContainer from './SiteNavItemsContainer';

// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import blue from '@material-ui/core/colors/blue';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

class MobileNav extends Component {
  state = {
    mobileMenuOpen: false
  };

  toggleMobileMenu = (open) => () => {
    this.setState({
      mobileMenuOpen: open,
    });
  };

  render() {
    return (
      <React.Fragment>
        <MobileMenuButton variant="fab" color="primary" onClick={this.toggleMobileMenu(true)}>
          <MenuIcon />
        </MobileMenuButton>

        <SwipeableDrawer
          className="MobileNavStyles-swipeableDrawer"
          anchor="bottom"
          open={this.state.mobileMenuOpen}
          onClose={this.toggleMobileMenu(false)}
          opOpen={this.toggleMobileMenu(true)}
        >
          <div onClick={this.toggleMobileMenu(false)}>
            <List>
              <SiteNavItemsContainer />
            </List>

            <Divider />

            <List>
              <ListItem>
                <ListItemIcon><SearchIcon /></ListItemIcon>
                {/* <QuickSearch /> */}
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
}

const MobileMenuButton = styled(Button)`
  && {
    position: fixed;
    right: 16px;
    bottom: 16px;
  }
`;

export default MobileNav;
