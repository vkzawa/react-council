import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

// Material UI
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";

const PageHeading = props => (
  <Container>
    <Typography variant="h4">{props.title}</Typography>
  </Container>
);

const Container = styled.div`
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

export default PageHeading;
