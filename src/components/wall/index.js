import { connect } from 'react-redux';
import React from 'react';
import injectSheet from 'react-jss';

import Sticker from '../sticker';
import styles from './styles';
import { getIpInfo } from '../../actions';

class Wall extends React.PureComponent {

  componentWillMount() {
    this.props.getIpInfo();
  }

  render() {
    const { classes, us, location, distance } = this.props;
    const title = us ? 'You\'re where you should be!' : 'Pack your bags!';
    const distanceText = `You're ${distance} miles away from USA`;
    return (
      <div className={classes.wall}>
        <Sticker
          title={title}
          location={location}
          distance={distanceText}
        />
      </div>
    );
  }

}

const mapStateToProps = state => ({
  location: state.location,
  distance: state.distance,
  us: state.us,
});

const mapDispatchToProps = dispatch => ({
  getIpInfo: getIpInfo(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Wall));
