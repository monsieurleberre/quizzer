import React from 'react'
import Question from './Question.jsx'
import AnswerList from './AnswerList.jsx'
import Explanation from './Explanation.jsx'

export default class QuestionFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.question,
        };
        this.props = props;
    }

    render() {
        return (
            <div className="questionFrame">
                <Question question={this.state.question.question} tip={this.state.question.tip} />
                <AnswerList answers={this.state.question.answers} answerType={this.state.question.answerType}/>
                <Explanation explanation={this.props.question.explanation} />
            </div>
        )
    }
}
