import React, {PropTypes} from 'react';
import AnswerList from './AnswerList';
//import Explanation from './Explanation';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const QuestionFrame = ({question, questionIndex, questionsCount}) => {
        return (
            <div className="questionFrame">
                <Card>
                    <CardTitle title={question.get('question')} subtitle={question.get('tip')} />
                    <CardHeader
                        title="This is the big daddy exams"
                        subtitle={`question ${questionIndex + 1 }/${questionsCount}`} 
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
                        <AnswerList answers={question.get('answers')} answerType={question.get('answerType')}/>
                    </CardText>

                </Card>
                
            </div>
        );
    };

QuestionFrame.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  questionsCount: PropTypes.number.isRequired
};



export default QuestionFrame;