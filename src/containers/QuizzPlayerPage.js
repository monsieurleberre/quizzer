import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/quizzPlayerActions';
import QuizzPlayer from '../components/quizzPlayer/QuizzPlayer';

export const QuizzPlayerPage = (props) => {
  console.debug('QuizzPlayer gets props:');
  console.debug(props);
  return (
    <QuizzPlayer
      questions={props.questions}
      currentQuestionIndex={props.currentQuestionIndex}
      nextQuestion = {props.actions.nextQuestion}
      previousQuestion = {props.actions.previousQuestion}
      />
  );
};

QuizzPlayerPage.propTypes = {
  actions: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    questions: state.getIn(['quizzPlayer', 'questions']),
    currentQuestionIndex: state.getIn(['quizzPlayer', 'currentQuestionIndex'])
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
