import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadImages} from '../actions/aboutActions';
import About from '../components/About';

export const AboutPage = (props) => {
  console.debug('About gets props:');
  console.debug(loadImages);
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
    actions: bindActionCreators(loadImages, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
