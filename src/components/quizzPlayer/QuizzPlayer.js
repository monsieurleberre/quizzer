import React, {PropTypes} from 'react';
import QuestionFrame from './QuestionFrame';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import {Link} from 'react-router';


class QuizzPlayer extends React.Component {
    constructor(props) {
        super(props);
        console.debug('creating QuizzPlayer');

        this.props.questions = {
            'questions': {
                '0': {
                    'question': 'Who do you really think you are ?',
                    'answerType': 'many',
                    'answers': {
                        '0': {
                            'answer': 'The person that is reading this',
                            'score': 1
                        },
                        '1': {
                            'answer': 'Your parent\'s kid',
                            'score': 1
                        },
                        '2': {
                            'answer': 'A question answerer',
                            'score': 1
                        },
                        '3': {
                            'answer': 'That other guy too',
                            'score': 1
                        },
                        '4': {
                            'answer': 'A drunk programer',
                            'score': 1
                        }
                    },
                    'tags': ['basic'],
                    'explanation': 'You\'re anything but that other guy',
                    'tip': 'no tip for that question: sort yourself out'
                },
                '1': {
                    'question': 'Chabada bada bada ?',
                    'answerType': 'one',
                    'answers': {
                        '0': {
                            'answer': 'Not really',
                            'score': 1
                        },
                        '1': {
                            'answer': 'Absolutely',
                            'score': 1
                        },
                        '2': {
                            'answer': 'Only on a friday',
                            'score': 1
                        }
                    },
                    'tags': ['basic'],
                    'explanation': 'Boud boud blabla',
                    'tip': 'yes I\'ll give you a clue'
                }
            }
        };
        this.props.currentQuestion = this.props.questions('0');
        this.props.currentQuestionIndex = 0;
    }

    componentDidMount() {
        console.debug('QuizzPlayer did mount');
    }

    render() {

        if (!this.props.currentQuestion) {
            if (!this.props.fetchQuestionsPending) setTimeout(() => console.debug("fetchingQuestions"), 0);
            return (<CircularProgress mode="indeterminate" on/>);
        }
        return (
            <div className="QuizzPlayer" width="420">
                <div>
                    <div middle="xs">
                        <div xs={1}><FlatButton icon={<ChevronLeft />} onClick={() => console.debug("click left")} /></div>
                        <div>
                            <QuestionFrame question={this.props.currentQuestion}
                                questionIndex={this.props.currentQuestionIndex}
                                questionsCount={this.props.questions.length} />
                        </div>
                        <div xs={1}>
                            <FlatButton icon={<ChevronRight />} onClick={() => console.debug("click right")} /></div>
                    </div>
                    <div>
                        <FlatButton label="Edit"
                            linkButton={true}
                            containerElement={<Link to={'editor'} />}/>

                    </div>

                </div>
            </div>
        );
    }
}

QuizzPlayer.propTypes = {
  currentQuestion: PropTypes.string.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};


export default QuizzPlayer;  