import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/aboutActions';
import About from '../components/About';

export const AboutPage = (props) => {
  console.debug('About gets props:');
  console.debug(actions.loadImages);
  return (
    <About loadImages={props.actions.loadImages} />
  );
};

// AboutPage.propTypes = {
//   images: PropTypes.array.isRequired,
// };

function mapStateToProps(state) {
  return {
    questions: state.get('images', []),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
