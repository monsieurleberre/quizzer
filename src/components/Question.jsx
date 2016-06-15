import React from 'react';
    
export default class Question extends React.Component {
    constructor(props){
        super(props);
        console.log(`props are ${this.props}`);
        this.state = {
            question : props.question || 'question constructor',
            tip : props.tip || 'tip constructor'
        };
        
        console.log(`tip is ${this.state.tip}`);
        console.log(`question is ${this.state.question}`);
    }
    
    render() {
        return (
            <div classname="question">
                To be or not to be
            </div>
            )
    }
}
                // <h1>question: {this.state.question}</h1>
                // <h2>tip: {this.state.tip}</h2>
