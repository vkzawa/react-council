import React from "react";
import he from "he";

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
import Moment from "react-moment";

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

    return (
      <React.Fragment>
        {this.props.meetings.map((meeting, index) => {
          const startDate = parseInt(meeting.details.meetingDate * 1000, 10);
          const openTime = parseInt(meeting.details.meetingOpen * 1000, 10);
          const startTime = parseInt(meeting.details.meetingStart * 1000, 10);

          return (
            <ExpansionPanel
              expanded={meetingListExpanded === index}
              onChange={this.handleChange(index)}
              key={meeting.id}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container alignItems="center" spacing={8}>
                  <Grid item xs={10}>
                    <Typography variant="subtitle2">
                      {he.decode(meeting.title)}
                    </Typography>
                    <Typography variant="caption">
                      <Moment format="dddd">
                        {startDate}
                      </Moment>{" "}
                      at{" "}
                      <Moment format="hh:mmA">
                        {startTime}
                      </Moment>
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      component="div"
                      variant="caption"
                      align="center"
                    >
                      <Moment format="MMM">
                        {startDate}
                      </Moment>
                    </Typography>
                    <Typography component="div" variant="h6" align="center">
                      <Moment format="DD">
                        {startDate}
                      </Moment>
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      <Moment format="MMMM Do, YYYY">
                        {startDate}
                      </Moment>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="caption"> Doors open: </Typography>
                    <Typography variant="body2">
                      <Moment format="hh:mmA">
                        {openTime}
                      </Moment>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="caption">Starts at:</Typography>
                    <Typography variant="body2">
                      <Moment format="hh:mmA">
                        {startTime}
                      </Moment>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      <strong>{meeting.details.venueName}</strong>
                      <br />
                      {meeting.details.venueAddress1}
                      <br />
                      {meeting.details.venueAddress2 &&
                        meeting.details.venueAddress2}
                      {meeting.details.venueCity}, {meeting.details.venueState}{" "}
                      {meeting.details.venueZip}
                    </Typography>
                  </Grid>
                </Grid>

                <Typography variant="subtitle1">
                  {meeting.details.location}
                </Typography>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small" color="primary">
                  View Agenda
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
