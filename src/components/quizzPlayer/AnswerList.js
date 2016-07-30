import React, {PropTypes} from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Checkbox} from 'material-ui/Checkbox';
import {ONE} from '../../constants/answerTypes';


const AnswerList = ({answerType, answers}) => {
    // if (answerType == ONE) {
    //     let answerNodes = Object.keys(answers).map((a) =>
    //         <RadioButton label={answers[a].answer}
    //             value={answers[a].answer}
    //             key={answers[a].answer}/>);
    //     return (
    //         <RadioButtonGroup name="answerGroup" children={answerNodes} />
    //     );
    // } else {
        // let answerNodes = Object.keys(answers).map((a) =>
        //     <Checkbox label={answers[a].answer}
        //         key={answers[a].answer}/>);
        let answerNodes = Object.keys(answers).map((a) =>
            <li key={answers[a].answer}>{answers[a].answer}</li>);
        return (
            <ul>
                {answerNodes}
            </ul>
        );
    //}
};

AnswerList.propTypes = {
    answerType: PropTypes.string.isRequired,
    answers: PropTypes.object.isRequired
};

export default AnswerList;