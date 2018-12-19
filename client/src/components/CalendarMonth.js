import React from "react";
import styled from "styled-components";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

class CalendarMonth extends React.Component {
  render() {
    const { events, accessors } = this.props;
    const localizer = BigCalendar.momentLocalizer(moment);

    return (
      <CalendarMonthStyles>
        <BigCalendar
          localizer={localizer}
          events={events}
          {...this.props.accessors}
          views={{ month: true }}
        />
      </CalendarMonthStyles>
    );
  }
}

const CalendarMonthStyles = styled.div`
  height: 500px;
`;

export default CalendarMonth;
