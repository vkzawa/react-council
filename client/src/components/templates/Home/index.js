import React, { Component } from 'react';

import ContentBlock from '../../utilities/ContentBlock';

// Material UI
import Typography from '@material-ui/core/Typography';

class Home extends Component {

  render() {

    if (this.props.data) {

      const data = this.props.data;

      return (
        <article className="home">
          <Typography variant="body2">
            <ContentBlock content={data.content.rendered} />
          </Typography>
        </article>
      );
    }

    return null;
  };
};

export default Home;
