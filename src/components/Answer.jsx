import React from 'react'

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: props.answer || "constructor answer",
            score: props.score
        };

    }

    render() {
        return (
            <div className="answer">
                {this.state.answer} ({this.state.score})
            </div>
        )
    }
}