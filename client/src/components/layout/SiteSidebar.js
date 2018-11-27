import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import SiteNavItemsContainer from './SiteNavItemsContainer';

import CESPNCLogo from '../../images/cespnc-logo.jpg';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const SiteSidebar = () => (
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
      <SiteNavItemsContainer />
    </List>
  </header>
);

const SiteLogo = styled(NavLink)`
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

export default SiteSidebar;
