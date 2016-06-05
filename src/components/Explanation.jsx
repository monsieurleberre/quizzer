import React from 'react'

export default class Explanation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            explanation : props.explanation    
        };
    }

    render() {
        return (
            <div className="explanation">
                {this.state.explanation}
            </div>
        )
    }
}