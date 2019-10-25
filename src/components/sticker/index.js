import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import styles from './styles';

class Sticker extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string,
    distance: PropTypes.string,
    location: PropTypes.string,
  }

  static defaultProps = {
    title: null,
    distance: null,
    location: null,
  }

  render() {
    const { classes, title, distance, location } = this.props;
    return (
      <div className={classes.sticker}>
        <div className={classes.title}>{title}</div>
        <div className={classes.distance}>{distance}</div>
        <div className={classes.location}>Location: {location}</div>
      </div>
    );
  }

}

export default injectSheet(styles)(Sticker);
