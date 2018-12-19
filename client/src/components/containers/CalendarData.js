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
      api.Content.eventsList({
        page: 1,
        per_page: 100,
        start_date: startOfMonth,
        end_date: endOfMonth
      })
    );
  }

  handleChangeMonth = range => {
    const startOfMonth = moment(range.start).format("YYYY-MM-DD hh:mm");
    const endOfMonth = moment(range.end).format("YYYY-MM-DD hh:mm");

    this.props.loadEvents(
      api.Content.eventsList({
        page: 1,
        per_page: 100,
        start_date: startOfMonth,
        end_date: endOfMonth
      })
    );
  };

  handleSelectDay = slot => {
    const startOfMonth = moment(slot.start).format("YYYY-MM-DD hh:mm");
    const endOfMonth = moment(slot.end).format("YYYY-MM-DD hh:mm");

    this.props.loadEvents(
      api.Content.eventsList({
        page: 1,
        per_page: 100,
        start_date: startOfMonth,
        end_date: endOfMonth
      })
    );
  };

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
          <CalendarMonth
            events={this.props.events}
            accessors={accessors}
            onRangeChange={this.handleChangeMonth}
            onSelectSlot={this.handleSelectDay}
          />
          <MeetingList
            meetings={this.props.events}
            emptyLabel="No Events This Month"
          />
        </React.Fragment>
      );
    }

    return <CalendarMonth />;
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
