import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

// Material UI
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import CESPNCLogo from "../images/cespnc-logo.jpg";

const MobileHeader = () => (
  <ToolbarStyles>
    <Grid container alignItems="center" justify="space-between">
      <Grid item>
        <NavLink to="/">
          <SiteLogo>
            <img
              src={CESPNCLogo}
              alt="Central San Pedro Neighborhood Council Logo"
            />
          </SiteLogo>
        </NavLink>
      </Grid>
      <Grid item>
        <SiteLogo>
          <SocialIcon
            className="MobileHeader-socialIcon"
            url="https://www.facebook.com/coastal.sanpedro/"
          />
          <SocialIcon
            className="MobileHeader-socialIcon"
            url="https://www.twitter.com/coastal.sanpedro/"
          />
        </SiteLogo>
      </Grid>
    </Grid>
  </ToolbarStyles>
);

const ToolbarStyles = styled(Toolbar)`
  background-color: white;
  padding-top: 8px;
  padding-bottom: 8px;

  .MobileHeader-socialIcon {
    width: 32px !important;
    height: 32px !important;
    margin: 8px;
  }
`;

const SiteLogo = styled.div`
  color: white;
  font-family: sans-serif;

  > img {
    display: block;
    height: 75px;
    width: auto;
  }
`;

export default MobileHeader;
