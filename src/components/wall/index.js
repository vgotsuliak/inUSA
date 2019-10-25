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
    const { classes } = this.props;
    return (
      <div className={classes.wall}>
        <Sticker />
      </div>
    );
  }

}

const mapStateToProps = state => ({
  ip: state.ip,
});

const mapDispatchToProps = dispatch => ({
  getIpInfo: getIpInfo(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Wall));
