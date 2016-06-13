import React from 'react';
import QuestionFrame from './QuestionFrame.jsx'
import connectToStores from 'alt-utils/lib/connectToStores';
import QuizzStore from '../stores/QuizzStore';
import Login from './Login.jsx'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import ChevronRight from 'react-material-icons/icons/navigation/chevron-right';
import ChevronLeft from 'react-material-icons/icons/navigation/chevron-left';

@connectToStores
class QuizzPlayer extends React.Component {
    constructor(props) {
        super(props);
        console.log('creating QuizzPlayer')
        console.log(props)
        // console.log(QuizzStore.getInstance())
        // var questions = QuizzStore.getInstance().getQuestions();
        // log.console(questions)
    }

    componentDidMount(){
        //this.state.selectedChannel = this.props.params.channel;
        QuizzStore.getQuestions();
    }

    static getStores() {
        console.log('trying to get stores');
        return [QuizzStore];
    }

    static getPropsFromStores() {
        console.log('QuizzerPlayer getting props from store Quizzer')
        console.log(QuizzStore)
        return QuizzStore.getState();
    }

    // @bind(Actions.questionListReceived)
    // handleQuestionsReceived(){
    //     console.log('getting question list')
    //     let questions = QuizzStore.getQuestions;
    //     console.log('received questions from QuizzStore');
    //     console.log(QuizzStore);
    //     this.setState({
    //         questions: questions,
    //         questionsCount: Object.keys(questions).length,
    //         maxIndex: Object.keys(questions).maxIndex,
    //         currentQuestionIndex: 0,
    //         currentQuestion: questions[0],
    //     });
    // }


    render() {
        if (!this.props.user) return (<Login />);
        if (!this.props.questions) 
        {
            return (<CircularProgress mode="indeterminate" />);
        }
        return (
            <div classname="QuizzPlayer" width="420">
                <Grid>
                    <Row>
                        <Col xs={1} middle="xs"><FlatButton icon={<ChevronLeft />} onClick={() => {}} /></Col>
                        <Col center="xs" middle="xs">
                            <QuestionFrame question={this.props.currentQuestion}
                                questionIndex={this.props.currentQuestionIndex}
                                questionsCount={this.props.questionsCount} />
                        </Col>

                        <Col xs={1} middle="xs">
                            <FlatButton icon={<ChevronRight />} onClick={() => {} } /></Col>
                    </Row>

                </Grid>

            </div>
        )
    }


}

export default QuizzPlayer;  