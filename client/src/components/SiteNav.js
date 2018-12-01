import React, { Component } from "react";
import update from "immutability-helper";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import he from "he";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import blue from "@material-ui/core/colors/blue";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import DomainIcon from "@material-ui/icons/Domain";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import GavelRoundedIcon from "@material-ui/icons/GavelRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoIcon from "@material-ui/icons/Info";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import MapRoundedIcon from "@material-ui/icons/MapRounded";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import TimerRoundedIcon from "@material-ui/icons/TimerRounded";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

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
  photoLibraryIcon: PhotoLibraryIcon,
  timerIcon: TimerRoundedIcon,
  workIcon: WorkOutlineIcon
};

class SiteNav extends Component {
  constructor(props) {
    super(props);

    let parentMenuItems = {};

    props.menu.forEach(menuItem => {
      if (menuItem.menu_item_parent > 0) {
        parentMenuItems[menuItem.menu_item_parent] = { open: false };
      }
    });

    Object.keys(parentMenuItems).forEach(parentId => {
      parentMenuItems[parentId].childArray = props.menu.filter(
        item => item.menu_item_parent === parentId
      );
    });

    this.state = {
      parentMenuItems: parentMenuItems
    };

    this.toggleNested = this.toggleNested.bind(this);
  }

  toggleNested = parentId => {
    var newState = update(this.state, {
      parentMenuItems: {
        [parentId]: {
          open: { $set: !this.state.parentMenuItems[parentId].open }
        }
      }
    });
    this.setState(newState);
  };

  render() {
    const { parentMenuItems } = this.state;
    const { menu } = this.props;

    return menu.map((menuItem, i) => {
      const IconTag = menuItem.description
        ? iconMap[menuItem.description]
        : null;
      const isParent = menuItem.ID in parentMenuItems;
      const isChild = menuItem.menu_item_parent === "0" ? false : true;

      if (isParent) {
        var childArray = parentMenuItems[menuItem.ID].childArray;
      }

      if (isChild) return null;

      const activeStyles = {
        boxShadow: `-5px 0 0 ${blue[900]}`
      };

      return (
        <React.Fragment key={menuItem.ID}>
          <ListItem button to={menuItem.url} component={NavLink} exact>
            {IconTag && (
              <ListItemIcon>
                <IconTag color="primary" />
              </ListItemIcon>
            )}

            <ListItemText
              primary={he.decode(menuItem.title)}
              primaryTypographyProps={{ variant: "body2" }}
            />

            {isParent && (
              <ListItemSecondaryAction>
                <NestedToggle
                  size="small"
                  onClick={() => this.toggleNested(menuItem.ID)}
                >
                  {parentMenuItems[menuItem.ID].open ? (
                    <ExpandLessIcon fontSize="small" />
                  ) : (
                    <ExpandMoreIcon fontSize="small" />
                  )}
                </NestedToggle>
              </ListItemSecondaryAction>
            )}
          </ListItem>

          {childArray && (
            <Collapse
              in={parentMenuItems[menuItem.ID].open}
              timeout="auto"
              unmountOnExit
            >
              <NestedList disablePadding>
                {childArray.map(childItem => {
                  let IconTag = childItem.description
                    ? iconMap[childItem.description]
                    : null;

                  return (
                    <ListItem
                      button
                      key={childItem.ID}
                      component={NavLink}
                      to={childItem.url}
                      exact
                      activeStyle={activeStyles}
                    >
                      <NestedListItem>
                        <ListItemText
                          primary={he.decode(childItem.title)}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </NestedListItem>
                    </ListItem>
                  );
                })}
              </NestedList>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  }
}

const NestedList = styled(List)`
  background-color: #f5f5f5;
`;

const NestedListItem = styled.div`
  padding-left: 56px;
`;

const NestedToggle = styled(IconButton)`
  padding: 6px !important;
`;

export default SiteNav;
