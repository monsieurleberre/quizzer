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
            questionsCount: props.questionsCount,
            questionIndex: props.questionIndex,
            question: props.question,
        }
    }

    render() {
        return (
            <div className="questionFrame">
                <Card>
                    <CardTitle title={this.state.question.question} subtitle={this.state.question.tip} />
                    <CardHeader
                        title="This is the big daddy exams"
                        subtitle={`question ${this.state.questionIndex + 1 }/${this.state.questionsCount}`} 
                        avatar="http://lorempixel.com/100/100/people/"
                        />
                    <CardMedia style={{
                        maxHeight:'200px'
                    }}
                        overlay={<CardTitle title="Check this technical image" subtitle="it is suspiciously useless" />}
                        >
                        <img src="http://lorempixel.com/400/200/technics/" />
                    </CardMedia>
                    <CardText>
                        <AnswerList answers={this.state.question.answers} answerType={this.state.question.answerType}/>
                    </CardText>

                </Card>
                
            </div>
        )
    }
}
