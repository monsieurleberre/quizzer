import React, {PropTypes} from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';


const AnswerList = ({answerType, answers}) => {
            if(answerType == 'one') {
                this.answerNodes = Object.keys(answers).map((a) => 
                    <RadioButton label={answers[a].answer} 
                        value={answers[a].answer} 
                        key={answers[a].answer} 
                        score={answers[a].score}/>);
                return (
                    <RadioButtonGroup name="answerGroup" children={this.answerNodes} />
            );}  else {
                this.answerNodes = Object.keys(answers).map((a) => 
                    <Checkbox label={answers[a].answer} 
                        key={answers[a].answer} 
                        score={answers[a].score}/>);
                return (
                    <div>
                        {this.answerNodes}
                    </div>
            );}    
    };

AnswerList.propTypes = {
    answerType: PropTypes.object.isRequired,
    answers: PropTypes.array.isRequired
};

export default AnswerList;