import React from 'react'

class AnswerList extends React.Component {
    constructor() {
        super();
        this.state = {

        };
        this.props = {

        };
    }

    render() {
        var answerNodes = this.state.answers.map(a => <Answer answer={a} />);
        return (
            <div className="answerList" answerType={this.state.answerType}>
                {this.answerNodes}
            </div>
        )
    }
}