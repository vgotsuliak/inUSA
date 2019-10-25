import React from 'react';
import injectSheet from 'react-jss';

import Sticker from '../sticker';
import styles from './styles';

class Wall extends React.PureComponent {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wall}>
        <Sticker />
      </div>
    );
  }

}

export default injectSheet(styles)(Wall);
