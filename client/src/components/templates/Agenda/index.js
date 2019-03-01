import React, { Component } from "react";
import styled from "styled-components";
import he from "he";

// Material UI
import Typography from "@material-ui/core/Typography";

import ContentBlock from "../../utilities/ContentBlock";
import WPContent from "../../utilities/WPContent";
import PageHeading from "../../PageHeading";

class Agenda extends Component {
  render() {
    if (this.props.data) {
      let data = this.props.data;
      const decodedTitle = he.decode(data.title.rendered);

      return (
        <article className={`${this.props.slug} default-template`}>
          <PageHeading title={decodedTitle} />

          <Typography variant="body1" component="div">
            <WPContent>
              <ContentBlock content={data.description} />
            </WPContent>
          </Typography>
        </article>
      );
    }

    return <div>No content</div>;
  }
}

const DetailsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 3%;
  padding-right: 3%;
  max-width: 720px;
`;

export default Agenda;
