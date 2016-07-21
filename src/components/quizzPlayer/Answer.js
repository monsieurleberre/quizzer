import React, {PropTypes} from 'react';
import RadioButton from 'material-ui/RadioButton';

const Answer = ({answer, answerType}, key) => {
    if (answerType == 'one') {
        return (
            <RadioButton key={key} label={answer}/>
        );
    } else {
        return (
            <div className="answer">

            </div>
        );
    }
};

Answer.propTypes = {
    answerType: PropTypes.object.isRequired,
    answer: PropTypes.object.isRequired
};

export default Answer; 