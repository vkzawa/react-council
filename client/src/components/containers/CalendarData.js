import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import api from "../../api";
import CalendarMonth from "../CalendarMonth";
import MeetingList from "../MeetingList";

class CalendarData extends Component {
  componentDidMount() {
    const startOfMonth = moment()
      .startOf("month")
      .format("YYYY-MM-DD hh:mm");
    const endOfMonth = moment()
      .endOf("month")
      .format("YYYY-MM-DD hh:mm");

    this.props.loadEvents(
      api.Content.eventsList(1, 10, startOfMonth, endOfMonth)
    );
  }

  render() {
    if (this.props.events) {
      const accessors = {
        id: "id",
        titleAccessor: "title",
        allDayAccessor: "all_day",
        startAccessor: "start_date",
        endAccessor: "end_date"
      };

      return (
        <React.Fragment>
          <CalendarMonth events={this.props.events} accessors={accessors} />
          <MeetingList
            meetings={this.props.events}
            emptyLabel="No Upcoming Events"
          />
        </React.Fragment>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  events: state.api.lists.events
});

const mapDispatchToProps = dispatch => ({
  loadEvents: events =>
    dispatch({ type: "LOAD_CALENDAR_EVENTS", payload: events })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarData);
