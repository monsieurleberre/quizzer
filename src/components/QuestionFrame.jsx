import React from 'react'
import AnswerList from './AnswerList.jsx'
import Explanation from './Explanation.jsx'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import ChevronRight from 'react-material-icons/icons/navigation/chevron-right';
import ChevronLeft from 'react-material-icons/icons/navigation/chevron-left';

export default class QuestionFrame extends React.Component {
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
        return (
            <div className="questionFrame">
                <Card>
                    <CardTitle title={this.state.currentQuestion.question} subtitle={this.state.currentQuestion.tip} />
                    <CardHeader
                        title="This is the big daddy exams"
                        subtitle={`question ${this.state.currentQuestionIndex + 1 }/${this.state.questionsCount}`} 
                        avatar="http://lorempixel.com/100/100/people/"
                        />
                    <CardMedia style={{
                        maxHeight:"200px"
                    }}
                        overlay={<CardTitle title="Check this technical image" subtitle="it is suspiciously useless" />}
                        >
                        <img src="http://lorempixel.com/400/200/technics/" />
                    </CardMedia>
                    <CardText>
                        <AnswerList answers={this.state.currentQuestion.answers} answerType={this.state.currentQuestion.answerType}/>
                    </CardText>
                    <Divider />
                    <CardActions>
                         <FlatButton icon={<ChevronLeft />} onClick={() => {
                                console.log("click left");
                                let newIndex = Math.max(0, this.state.currentQuestionIndex-1);
                                console.log(newIndex);
                                this.setState(previousState => {
                                    previousState.currentQuestion = this.props.questions[newIndex]
                                    previousState.currentQuestionIndex = newIndex})
                             }} />
                         <FlatButton icon={<ChevronRight />} onClick={() => {
                                console.log("click right");
                                let newIndex = Math.min(1, this.state.currentQuestionIndex+1);
                                console.log(newIndex);
                                this.setState(previousState => {
                                    previousState.currentQuestion = this.props.questions[newIndex]
                                    previousState.currentQuestionIndex = newIndex})
                             }} />
                    </CardActions>
                </Card>
                
            </div>
        )
    }
}
