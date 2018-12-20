import React from "react";
import styled from "styled-components";
import he from "he";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

class CalendarMonth extends React.Component {
  render() {
    const { events, accessors } = this.props;
    const localizer = BigCalendar.momentLocalizer(moment);

    const decodedEvents = events.reduce((events, event) => {
      let eventObject = event;
      eventObject.title = he.decode(eventObject.title);
      events = [...events, eventObject];
      return events;
    }, []);

    return (
      <CalendarMonthStyles>
        <BigCalendar
          localizer={localizer}
          events={decodedEvents}
          {...accessors}
          views={{ month: true }}
          onRangeChange={range => {
            this.props.onRangeChange(range);
          }}
          onSelectSlot={slotInfo => {
            this.props.onSelectSlot(slotInfo);
          }}
        />
      </CalendarMonthStyles>
    );
  }
}

const CalendarMonthStyles = styled.div`
  height: 500px;
  height: 50vh;

  .rbc-toolbar {
    background-color: #3379af;
    padding: 10px;
    margin-bottom: 0;
  }

  @media (max-width: 400px) {
    .rbc-toolbar {
      flex-direction: column;
    }
  }

  .rbc-toolbar .rbc-toolbar-label {
    color: white;
    text-align: left !important;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .rbc-btn-group {
    background-color: white;
    border-radius: 5px;
    order: 2;
  }

  .rbc-month-view {
    border-left: none;
    border-right: none;
  }

  .rbc-header {
    border-bottom: none;
    font-weight: normal;
  }

  .rbc-header,
  .rbc-date-cell {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    text-align: left;
    padding: 0.5% 1%;
    padding-bottom: 0;
  }

  .rbc-now.rbc-current {
    font-weight: normal;
  }

  .rbc-row-segment {
    padding: 0;
    padding-right: 2px;
  }

  .rbc-event {
    border-radius: 2px;
    font-size: 11px;
  }

  @media (max-width: 600px), (max-height: 800px) {
    .rbc-row-segment {
      text-align: center;
    }

    .rbc-header,
    .rbc-date-cell {
      font-size: 12px;
    }

    .rbc-event {
      border-radius: 50%;
      width: 10px;
      height: 10px;
    }

    .rbc-event-content {
      display: none !important;
    }
  }
`;

export default CalendarMonth;
