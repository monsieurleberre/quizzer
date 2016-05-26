import React from 'react'
    
class Question extends React.Component {
    constructor(){
        super();
        this.state = {
            
        },
        this.props.question = "question1";
        this.props.tip = "tip";
    }
    
    render() {
        return (
            <div className="question">
                <h1>{this.props.question}</h1>
                <h2>{this.props.tip}</h2>
            </div>
            )
    }
}