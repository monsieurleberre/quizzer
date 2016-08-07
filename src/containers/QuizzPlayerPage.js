import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/quizzPlayerActions';
import QuizzPlayer from '../components/quizzPlayer/QuizzPlayer';

export const QuizzPlayerPage = (props, context) => {
  return (
    <QuizzPlayer
      questions={props.quizzPlayer.questions}
      currentQuestionIndex={props.quizzPlayer.currentQuestionIndex}
      nextQuestion = {props.actions.nextQuestion}
      previousQuestion = {props.actions.previousQuestion}
      />
  );
};

QuizzPlayerPage.propTypes = {
  actions: PropTypes.object.isRequired,
  quizzPlayer: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    quizzPlayer: state.quizzPlayer
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
)(QuizzPlayerPage);
