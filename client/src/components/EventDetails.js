import React from "react";
import moment from "moment";
import Moment from "react-moment";
import Parse from "url-parse";
import styled from "styled-components";

// Material UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import PlaceRoundedIcon from "@material-ui/icons/PlaceRounded";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AddToCalendarButton from "./AddToCalendarButton";

class EventDetails extends React.Component {
  render() {
    const { event } = this.props;
    const eventUrl = Parse(event.url);
    const startDate = event.start_date;
    const openTime = event.start_date;
    const startTime = event.start_date;
    const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=";
    const eventAddress =
      event.venue.venue +
      ", " +
      event.venue.address +
      " " +
      event.venue.city +
      ", " +
      event.venue.state +
      " " +
      event.venue.zip;
    const mapQuery = encodeURI(eventAddress);

    const start = moment(event.start_date);
    const end = moment(event.end_date);
    const duration = end.diff(start, "hours", true);

    const addToCalendarEvent = {
      description: "",
      duration: `${duration}`,
      title: event.title,
      location: eventAddress,
      startDatetime: moment(event.start_date).format("YYYYMMDDTHHmmss"),
      endDatetime: moment(event.end_date).format("YYYYMMDDTHHmmss"),
      timezone: "America/Los_Angeles"
    };

    return (
      <Card>
        <CardContent>
          <Grid container>
            <Grid item md={6}>
              <Grid container spacing="8">
                <Grid item xs={2}>
                  <AccessTimeRoundedIcon color="primary" />
                </Grid>

                <Grid item xs={10}>
                  <Typography variant="body1">
                    <Moment format="dddd MMMM Do, YYYY">{startDate}</Moment>
                  </Typography>
                  <Typography variant="body2">
                    Starts at <Moment format="h:mmA">{startTime}</Moment>
                  </Typography>
                  <Typography variant="body2">
                    Doors open at <Moment format="h:mmA">{openTime}</Moment>
                  </Typography>

                  <ActionContainer>
                    <AddToCalendarButton
                      event={addToCalendarEvent}
                      buttonProps={{
                        variant: "outlined",
                        color: "primary",
                        size: "small"
                      }}
                    />
                  </ActionContainer>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6}>
              <Grid container spacing="8">
                <Grid item xs={2}>
                  <PlaceRoundedIcon color="primary" />
                </Grid>

                <Grid item xs={10}>
                  <Typography variant="body1">{event.venue.venue}</Typography>

                  <Typography variant="body2">
                    {event.venue.address}
                    <br />
                    {event.venue.city}, {event.venue.state} {event.venue.zip}
                  </Typography>

                  <ActionContainer>
                    <Button
                      component="a"
                      variant="outlined"
                      color="primary"
                      size="small"
                      href={`${googleMapUrl}${mapQuery}`}
                      target="_blank"
                    >
                      View Map
                    </Button>
                  </ActionContainer>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

const ActionContainer = styled.div`
  margin-top: 16px;
`;

export default EventDetails;
