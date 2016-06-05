import React from 'react'
import ReactDom from 'react-dom'
import Answer from './Answer.jsx'

export default class AnswerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //answers : { no : { score: 1}, fucking : { score: -1}, Answer : { score: 1}},
            answers : props.answers,
            answerType : props.answerType               
        };
        this.props = props;
    }

    render() {
        this.answerNodes = Object.keys(this.state.answers).map((a,i) => 
            <Answer answer={a} key={i} score={this.state.answers[a].score}/>);
        return (
            <div className="answerList" answerType={this.state.answerType}>
                {this.answerNodes}
            </div>
        )
    }
}