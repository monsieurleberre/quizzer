import React, {PropTypes} from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import {ONE} from '../../constants/answerTypes';
import {Map} from 'immutable';

const AnswerList = ({answerType, answers}) => {
    //console.log(Map({a:1, b:2, c:3, d:4}).update());
    console.debug(answers.valueSeq(iv => iv));

    //map1.mapKeys()
    if (answerType == ONE) {
        let answerNodes = answers.valueSeq()
            .map(iv => iv.get('answer'))
            .map(v =>
                <RadioButton label={v}
                    value={v}
                    key={v}/>);
        return (
            <RadioButtonGroup name="answerGroup" children={answerNodes} />
        );
    } else {
        let answerNodes = answers.valueSeq()
            .map(iv => iv.get('answer'))
            .map(v =>
                <Checkbox label={v}
                    key={v}/>);
        return (
            <div>{answerNodes}</div>
        );
    }
};

AnswerList.propTypes = {
    answerType: PropTypes.string.isRequired,
    answers: PropTypes.object.isRequired
};

export default AnswerList;