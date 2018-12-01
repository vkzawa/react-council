import React from "react";
import styled from "styled-components";
import LASeal from "../images/la-seal.svg";

const CityNav = () => (
  <CityNavContainer>
    <Logo href="http://lacity.org" target="_blank">
      <LogoImage>
        <img src={LASeal} alt="Seal of the City of Los Angeles" />
      </LogoImage>
      <LogoText>LOS ANGELES</LogoText>
    </Logo>

    <MenuItem href="https://myla311.lacity.org/">
      <MenuItemTag>311</MenuItemTag>
      <MenuItemLabel>City Services</MenuItemLabel>
    </MenuItem>

    <MenuItem href="https://www.lacity.org/your-government/government-information/city-directory">
      <MenuItemTag>LA</MenuItemTag>
      <MenuItemLabel>City Directory</MenuItemLabel>
    </MenuItem>
  </CityNavContainer>
);

const CityNavContainer = styled.div`
  background-color: #0f2940;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  height: 40px;
`;

const Logo = styled.a`
  display: flex;
  flex-grow: 1;
  text-decoration: none;
`;

const LogoImage = styled.div`
  > img {
    display: block;
    width: 27px;
    height: 27px;
  }
`;

const LogoText = styled.div`
  font-size: 18px;
  font-family: "Oswald", "Arial Black", sans-serif;
  font-weight: 400;
  color: white;
  margin-left: 5px;
`;

const MenuItem = styled.a`
  display: flex;
  font-family: Arial, Helvetica, "Nimbus Sans L", sans-serif;
  text-decoration: none;
  align-items: center;
  margin-left: 15px;
`;

const MenuItemTag = styled.div`
  background-color: white;
  border-radius: 6px;
  color: #0f2940;
  font-size: 11px;
  font-weight: bold;
  padding: 0 5px;
  line-height: 16px;
  margin-right: 5px;
`;

const MenuItemLabel = styled.div`
  color: white;
  font-size: 12px;
  line-height: 16px;
`;

export default CityNav;
