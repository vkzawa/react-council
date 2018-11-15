import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import he from 'he';
import { SocialIcon } from 'react-social-icons';

import CESPNCLogo from '../../images/cespnc-logo.jpg';

import api from '../../api';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import blue from '@material-ui/core/colors/blue';
import Divider from '@material-ui/core/Divider';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
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
  constructor(props) {
    super(props);
    this.props.loadMenu(api.Menus.bySlug('main'));
    this.buildMenu = this.buildMenu.bind(this);
  }

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
      <header className="header-main">
        <SiteLogo to="/">
          <img src={CESPNCLogo} alt="Central San Pedro Neighborhood Council Logo"/>
        </SiteLogo>

        <SocialList>
          <SocialItem>
            <SocialIcon url="https://www.facebook.com/CentralSanPedroNeighborhoodCouncil/" />
          </SocialItem>
          <SocialItem>
            <SocialIcon url="https://www.twitter.com/CentralSanPedroNeighborhoodCouncil/" />
          </SocialItem>
        </SocialList>

        <Divider />

        <List>
          {this.buildMenu()}
        </List>
      </header>
    );
  }
}

const SiteLogo = styled('NavLink')`
  > img {
    display: block;
    margin: 16px auto;
    max-width: 220px;
  }
`;

const SocialList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;
const SocialItem = styled.div`
  margin-left: 8px;
  margin-right: 8px;

  > a {
    width: 32px !important;
    height: 32px !important;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
