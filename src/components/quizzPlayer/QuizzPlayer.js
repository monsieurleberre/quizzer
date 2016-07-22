import React, {PropTypes} from 'react';
import QuestionFrame from './QuestionFrame';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import {Link} from 'react-router';

const QuizzPlayer = ({questions, currentQuestionIndex}) => {

    if (!questions) {
        return (<CircularProgress mode="indeterminate" on/>);
    }
    return (
        <div className="QuizzPlayer" width="420">
            <div>
                <div middle="xs">
                    <div xs={1}><FlatButton icon={<ChevronLeft />} onClick={() => console.debug("click left") } /></div>
                    <div>
                        <QuestionFrame question={questions[currentQuestionIndex]}
                            questionIndex={currentQuestionIndex}
                            questionsCount={questions.length} />
                    </div>
                    <div xs={1}>
                        <FlatButton icon={<ChevronRight />} onClick={() => console.debug("click right") } /></div>
                </div>
                <div>
                    <FlatButton label="Edit"
                        linkButton={true}
                        containerElement={<Link to={'editor'} />}/>
                </div>

            </div>
        </div>
    );
}

QuizzPlayer.propTypes = {
    currentQuestionIndex: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired
};


export default QuizzPlayer;  