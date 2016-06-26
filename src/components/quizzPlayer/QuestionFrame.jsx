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
    }

    render() {
        return (
            <div className="questionFrame">
                <Card>
                    <CardTitle title={this.props.question.question} subtitle={this.props.question.tip} />
                    <CardHeader
                        title="This is the big daddy exams"
                        subtitle={`question ${this.props.questionIndex + 1 }/${this.props.questionsCount}`} 
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
                        <AnswerList answers={this.props.question.answers} answerType={this.props.question.answerType}/>
                    </CardText>

                </Card>
                
            </div>
        )
    }
}
