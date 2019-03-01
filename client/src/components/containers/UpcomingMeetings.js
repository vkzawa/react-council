import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../api";
import MeetingList from "../MeetingList";

class UpcomingMeetings extends Component {
  componentDidMount() {
    this.props.loadMeetings(
      api.Content.eventsList({
        page: 1,
        per_page: 10,
        categories: "meetings"
      })
    );
  }

  render() {
    if (this.props.meetings) {
      return (
        <MeetingList
          meetings={this.props.meetings.events}
          emptyLabel="No Upcoming Meetings"
        />
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  meetings: state.api.lists.meetings.upcoming
});

const mapDispatchToProps = dispatch => ({
  loadMeetings: meetings =>
    dispatch({ type: "LOAD_UPCOMING_MEETINGS_LIST", payload: meetings })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingMeetings);
