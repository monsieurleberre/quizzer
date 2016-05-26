import React from 'react'

class Answer extends React.Component {
    constructor() {
        super();
        this.state = {

        };
        this.props = {

        };
    }

    render() {
        return (
            <div className="answer">
                {this.state.answer}{this.state.score}
            </div>
        )
    }
}