import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import he from 'he';

import api from '../../api';

// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import blue from '@material-ui/core/colors/blue';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

// Material Icons
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import InfoIcon from '@material-ui/icons/Info';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DomainIcon from '@material-ui/icons/Domain';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

const mapStateToProps = (state) => ({
  mainMenu: state.api.menus.main
});

const mapDispatchToProps = (dispatch) => ({
  loadMenu: (menu) => dispatch({ type: 'LOAD_MENU', payload: menu })
});

const iconMap = {
  accessibilityNewIcon: AccessibilityNewIcon,
  dateRangeIcon: DateRangeRoundedIcon,
  domainIcon: DomainIcon,
  formatListNumberedIcon: FormatListNumberedRoundedIcon,
  gavelIcon: GavelRoundedIcon,
  groupIcon: GroupRoundedIcon,
  homeIcon: HomeRoundedIcon,
  infoIcon: InfoIcon,
  mailIcon: MailOutlineRoundedIcon,
  mapIcon: MapRoundedIcon,
  menuIcon: MenuIcon,
  photoLibraryIcon: PhotoLibraryIcon,
  timerIcon: TimerRoundedIcon,
  workIcon: WorkOutlineIcon,
}

class Header extends Component {
  state = {
    mobileMenuOpen: false
  };

  constructor(props) {
    super(props);
    this.props.loadMenu(api.Menus.bySlug('main'));
    this.buildMenu = this.buildMenu.bind(this);
  }

  toggleMobileMenu = (open) => () => {
    this.setState({
      mobileMenuOpen: open,
    });
  };

  buildMenu() {
    if (this.props.mainMenu) {
      return this.props.mainMenu.map((menuItem, i) => {
        const IconTag = (menuItem.description)? iconMap[menuItem.description]: null;
        const decodedItemTitle = he.decode(menuItem.title);

        return (
          <ListItem
            key={menuItem.ID}
            button
            component={NavLink}
            exact
            to={menuItem.url}
            activeStyle={{
              borderRight: `5px solid ${blue[900]}`
            }}
          >
            {IconTag &&
              <ListItemIcon><IconTag /></ListItemIcon>
            }
            <ListItemText
              primary={decodedItemTitle}
              primaryTypographyProps={{
                variant: 'body2'
              }}
            />
          </ListItem>
        );
      })
    }

    return null;
  }

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
              {this.buildMenu()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
