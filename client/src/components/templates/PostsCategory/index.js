import React, { Component } from "react";
import styled from "styled-components";
import he from "he";

// Material UI
import Typography from "@material-ui/core/Typography";

import ContentBlock from "../../utilities/ContentBlock";
import WPContent from "../../utilities/WPContent";
import EventDetails from "../../EventDetails";

class Post extends Component {
  render() {
    if (this.props.data) {
      let data = this.props.data;
      const decodedTitle = he.decode(data.title);

      return (
        <article className={`${this.props.slug} default-template`}>
          <PageHeading>
            <Typography variant="h4">{decodedTitle}</Typography>
          </PageHeading>

          <Typography variant="body1" component="div">
            <WPContent>
              <ContentBlock content={data.description} />
            </WPContent>
          </Typography>

          <DetailsContainer>
            <EventDetails event={data} />
          </DetailsContainer>
        </article>
      );
    }

    return <div>No content</div>;
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

const DetailsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 3%;
  padding-right: 3%;
  max-width: 720px;
`;

export default Post;
