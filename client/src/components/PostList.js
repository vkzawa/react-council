import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import he from "he";
import Moment from "react-moment";

// Material UI
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

import ContentBlock from "./utilities/ContentBlock";

class PostList extends React.Component {
  state = {
    postListExpanded: "none"
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      postListExpanded: expanded ? panel : false
    });
  };

  render() {
    const { postListExpanded } = this.state;
    const { posts } = this.props;

    if (!posts || posts.length === 0) {
      return (
        <ExpansionPanel disabled>
          <ExpansionPanelSummary>
            <Typography variant="subtitle2">No Posts Found</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      );
    }

    return (
      <React.Fragment>
        {posts.map((post, index) => {
          const postTitle = he.decode(post.title.rendered);

          return (
            <PostListItem key={post.id}>
              <NavLink to={"/post/" + post.slug}>
                <Card>
                  <CardLayout component="div">
                    <CardContentWithStyles>
                      <PostHeading>{postTitle}</PostHeading>
                      <PostDate>
                        <Moment format="MMMM Do, YYYY">{post.date}</Moment>
                      </PostDate>
                      {post.excerpt.rendered && (
                        <PostExcerpt>
                          <ContentBlock content={post.excerpt.rendered} />
                        </PostExcerpt>
                      )}
                    </CardContentWithStyles>
                    {post.featured_media > 0 && (
                      <CardMediaWithStyles
                        image={post._embedded["wp:featuredmedia"][0].source_url}
                      />
                    )}
                  </CardLayout>
                </Card>
              </NavLink>
            </PostListItem>
          );
        })}
      </React.Fragment>
    );
  }
}

const PostListItem = styled.div`
  & + & {
    margin-top: 16px;
  }

  > a {
    text-decoration: none;
  }
`;

const PostHeading = styled.div`
  font-family: sans-serif;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const PostDate = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: #888;
  text-decoration: none;
`;

const PostExcerpt = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: #333;
  text-decoration: none;
`;

const CardLayout = styled(CardActionArea)`
  display: flex !important;
  align-items: stretch !important;
`;

const CardContentWithStyles = styled(CardContent)`
  flex: 1;
`;

const CardMediaWithStyles = styled(CardMedia)`
  width: 25%;
  max-width: 150px;
`;

export default PostList;
