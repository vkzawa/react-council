import React, { Component } from "react";
import styled from "styled-components";
import UpcomingMeetings from "../../containers/UpcomingMeetings";
import HotTopicPosts from "../../containers/HotTopicPosts";
import HeroSlideshow from "../../HeroSlideshow";
import HeroButtons from "../../HeroButtons";
import ContentBlock from "../../utilities/ContentBlock";
import WPContent from "../../utilities/WPContent";

// Material UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Home extends Component {
  render() {
    if (this.props.data) {
      const data = this.props.data;

      return (
        <React.Fragment>
          <HomeHero>
            {data.acf.slides && <HeroSlideshow slides={data.acf.slides} />}
            {data.acf.buttons && (
              <HeroBlockContent>
                <Grid container>
                  <Grid item xs={12}>
                    <HeroButtons buttons={data.acf.buttons} />
                  </Grid>
                </Grid>
              </HeroBlockContent>
            )}
          </HomeHero>
          <HomeContent>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6} md={7}>
                <Typography variant="body2" component="div">
                  <WPContent>
                    <ContentBlock content={data.content.rendered} />
                  </WPContent>
                </Typography>

                <Typography variant="h6">Latest News & Updates</Typography>
                <HotTopicPosts />
              </Grid>

              <Grid item xs={12} sm={6} md={5}>
                <Typography variant="h6">Upcoming Meetings & Events</Typography>
                <UpcomingMeetings />
              </Grid>
            </Grid>
          </HomeContent>
        </React.Fragment>
      );
    }

    return null;
  }
}

const HomeHero = styled.div`
  overflow: hidden;
  position: relative;
`;

const HomeContent = styled.article`
  padding: 16px;
`;

const HeroBlockContent = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), #fafafa 80%);
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export default Home;
