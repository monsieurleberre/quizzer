import React, {PropTypes} from 'react';
import QuestionFrame from './QuestionFrame';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import {Link} from 'react-router';

class QuizzPlayer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
    }

    nextQuestion() {
        this.props.nextQuestion();
    }

    previousQuestion() {
        this.props.previousQuestion();
    }

    render() {
        const {questions, currentQuestionIndex} = this.props;
        if (!questions) {
            return (<CircularProgress mode="indeterminate" on/>);
        }
        return (
            <div className="QuizzPlayer" width="420">
                <div>
                    <span>
                        <div><FlatButton icon={<ChevronLeft />} onClick={this.previousQuestion} /></div>
                        <div>
                            <QuestionFrame question={questions[currentQuestionIndex]}
                                questionIndex={currentQuestionIndex}
                                questionsCount={Object.keys(questions).length} />
                        </div>
                        <div><FlatButton icon={<ChevronRight />} onClick={this.nextQuestion} /></div>
                    </span>
                    <div>
                        <FlatButton label="Edit" containerElement={<Link to={'editor'} />}/>
                    </div>

                </div>
            </div>
        );
    }
}

QuizzPlayer.propTypes = {
    currentQuestionIndex: PropTypes.number.isRequired,
    questions: PropTypes.object.isRequired,
    nextQuestion: PropTypes.func.isRequired,
    previousQuestion: PropTypes.func.isRequired
};


export default QuizzPlayer;  