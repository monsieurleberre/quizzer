import React, {PropTypes} from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import {ONE} from '../../constants/answerTypes';


const AnswerList = ({answerType, answers}) => {
    if (answerType == ONE) {
        let answerNodes = Object.keys(answers).map((a) =>
            <RadioButton label={answers[a].answer}
                value={answers[a].answer}
                key={answers[a].answer}/>);
        return (
            <RadioButtonGroup name="answerGroup" children={answerNodes} />
        );
    } else {
        let answerNodes = Object.keys(answers).map((a) =>
            <Checkbox label={answers[a].answer}
                key={answers[a].answer}/>);
        return (
            <div>
                {answerNodes}
            </div>
        );
    }
};

AnswerList.propTypes = {
    answerType: PropTypes.string.isRequired,
    answers: PropTypes.object.isRequired
};

export default AnswerList;