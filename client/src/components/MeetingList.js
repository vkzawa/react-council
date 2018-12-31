import React from "react";
import he from "he";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Parse from "url-parse";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Material UI
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class MeetingList extends React.Component {
  state = {
    meetingListExpanded: "none"
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      meetingListExpanded: expanded ? panel : false
    });
  };

  render() {
    const { meetingListExpanded } = this.state;
    const { meetings } = this.props;
    const emptyLabel = this.props.emptyLabel || "No meetings found.";

    if (!meetings || meetings.length === 0) {
      return (
        <ExpansionPanel disabled>
          <ExpansionPanelSummary>
            <Typography variant="subtitle2">{emptyLabel}</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      );
    }

    return (
      <React.Fragment>
        {meetings.map((meeting, index) => {
          const meetingUrl = Parse(meeting.url);
          const relativeUrl = meetingUrl.pathname;
          const startDate = meeting.start_date;
          const openTime = meeting.start_date;
          const startTime = meeting.start_date;

          return (
            <ExpansionPanel
              expanded={meetingListExpanded === meeting.id}
              onChange={this.handleChange(meeting.id)}
              key={meeting.id}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container alignItems="center" spacing={8}>
                  <Grid item xs={10}>
                    <Typography variant="subtitle2">
                      {he.decode(meeting.title)}
                    </Typography>
                    <Typography variant="caption">
                      <Moment format="dddd">{startDate}</Moment> at{" "}
                      <Moment format="hh:mmA">{startTime}</Moment>
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      component="div"
                      variant="caption"
                      align="center"
                    >
                      <Moment format="MMM">{startDate}</Moment>
                    </Typography>
                    <Typography component="div" variant="h6" align="center">
                      <Moment format="DD">{startDate}</Moment>
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      <Moment format="MMMM Do, YYYY">{startDate}</Moment>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="caption"> Doors open: </Typography>
                    <Typography variant="body2">
                      <Moment format="hh:mmA">{openTime}</Moment>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="caption">Starts at:</Typography>
                    <Typography variant="body2">
                      <Moment format="hh:mmA">{startTime}</Moment>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      <strong>{meeting.venue.venue}</strong>
                      <br />
                      {meeting.venue.address}
                      <br />
                      {meeting.venue.city}, {meeting.venue.state}{" "}
                      {meeting.venue.zip}
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small" color="primary">
                  Open Agenda
                </Button>

                <Button
                  size="small"
                  color="secondary"
                  component={Link}
                  to={relativeUrl}
                >
                  View More Details
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
          );
        })}
      </React.Fragment>
    );
  }
}

export default MeetingList;
