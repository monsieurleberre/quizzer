import React from 'react';
import QuestionFrame from './QuestionFrame.jsx'
import connectToStores from 'alt-utils/lib/connectToStores';
import QuizzStore from '../stores/QuizzStore';
import Login from './Login.jsx'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import FlatButton from 'material-ui/FlatButton';
import ChevronRight from 'react-material-icons/icons/navigation/chevron-right';
import ChevronLeft from 'react-material-icons/icons/navigation/chevron-left';

@connectToStores
class QuizzPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsCount: Object.keys(props.questions).length,
            maxIndex: Object.keys(props.questions).maxIndex,
            currentQuestionIndex: 0,
            currentQuestion: props.questions[0],
        }
    }

    render() {
        if (!this.props.user) return (<Login />);

        return (
            <div classname="QuizzPlayer" width="420">
                <Grid>
                    <Row>
                        <Col xs={1} middle="xs"><FlatButton icon={<ChevronLeft />} onClick={() => {
                            console.log('click left');
                            let newIndex = Math.max(0, this.state.currentQuestionIndex - 1);
                            console.log(newIndex);
                            this.setState(previousState => {
                                previousState.currentQuestion = this.props.questions[newIndex]
                                previousState.currentQuestionIndex = newIndex
                            })
                        } } /></Col>
                        <Col center="xs">
                            <QuestionFrame question={this.state.currentQuestion}
                                questionIndex={this.state.currentQuestionIndex}
                                questionsCount={this.state.questionsCount} />
                        </Col>

                        <Col xs={1}>
                            <FlatButton icon={<ChevronRight />} onClick={() => {
                                console.log('click right');
                                let newIndex = Math.min(1, this.state.currentQuestionIndex + 1);
                                console.log(newIndex);
                                this.setState(previousState => {
                                    previousState.currentQuestion = this.props.questions[newIndex]
                                    previousState.currentQuestionIndex = newIndex
                                })
                            } } /></Col>
                    </Row>

                </Grid>

            </div>
        )
    }

    static getStores() {
        return [QuizzStore];
    }

    static getPropsFromStores() {
        return QuizzStore.getState();
    }

}

export default QuizzPlayer;  