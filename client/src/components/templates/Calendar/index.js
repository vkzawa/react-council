import React, { Component } from "react";

// Material UI
import CalendarData from "../../containers/CalendarData";

class Calendar extends Component {
  render() {
    if (this.props.data) {
      return (
        <article>
          <CalendarData />
        </article>
      );
    }

    return null;
  }
}

export default Calendar;
