import React, { Component } from "react";
import styled from "styled-components";
import he from "he";
// import MobileCalendar from 'react-calendar-mobile';
// import DesktopCalendar from 'react-big-calendar';

// Material UI
import Typography from "@material-ui/core/Typography";

import ContentBlock from "../../utilities/ContentBlock";
import WPContent from "../../utilities/WPContent";

class Calendar extends Component {
  render() {
    if (this.props.data) {
      let data = this.props.data;
      const decodedTitle = he.decode(data.title.rendered);

      return (
        <article className={`${this.props.slug} default-template`}>
          <PageHeading>
            <Typography variant="h4">{decodedTitle}</Typography>
          </PageHeading>
          <Typography variant="body1" component="div">
            <WPContent>
              <ContentBlock content={data.content.rendered} />
            </WPContent>
          </Typography>
        </article>
      );
    }

    return null;
  }
}

const PageHeading = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3%;
  padding-right: 3%;
  max-width: 720px;
  border-bottom: 1px solid #ccc;

  h4 {
    margin-bottom: -0.25em;
  }
`;

export default Calendar;
