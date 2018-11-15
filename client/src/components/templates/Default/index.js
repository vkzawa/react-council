import React, { Component } from 'react';
import he from 'he';

// Material UI
import Typography from '@material-ui/core/Typography';

import ContentBlock from '../../utilities/ContentBlock';

import './index.css';

class Default extends Component {

  render() {
    if (this.props.data) {
      let data = this.props.data;
      const decodedTitle = he.decode(data.title.rendered);

      return (
        <article className={`${this.props.slug} default-template`}>
          <Typography variant="h4">{decodedTitle}</Typography>
          <Typography variant="body1">
            <ContentBlock content={data.content.rendered} />
          </Typography>
        </article>
      );
    }

    return null;
  }
}

export default Default;
