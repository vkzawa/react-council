import React from "react";
import styled from "styled-components";

// Material UI
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";

const HeroButtons = ({ buttons }) => (
  <HeroButtonGroup>
    <Grid container spacing={8}>
      {buttons.map(button => (
        <Grid key={button.url} item xs={6} sm={4} lg={2}>
          <a href={button.url}>
            <HeroButtonsContainer>
              <HeroButtonLabel>
                <span>{button.label}</span>
              </HeroButtonLabel>
            </HeroButtonsContainer>
          </a>
        </Grid>
      ))}
    </Grid>
  </HeroButtonGroup>
);

const HeroButtonGroup = styled.div`
  ${"" /* padding: 8px; */}
`;

const HeroButtonsContainer = styled(CardActionArea)`
  width: 100%;
  height: 80px;
`;

const HeroButtonLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    rgba(51, 190, 180, 0.85) 50%,
    rgba(51, 190, 180, 1) 100%
  );
  display: flex;
  padding: 10px;
  line-height: 1;
  font-size: 16px;

  & > span {
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
  }
`;

export default HeroButtons;
