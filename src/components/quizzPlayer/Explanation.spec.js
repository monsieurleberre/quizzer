import React from 'react'
import {CardText} from 'material-ui/Card';

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
                <CardText expandable={true}>
                    {this.state.explanation}
                </CardText>
            </div>
        )
    }
}