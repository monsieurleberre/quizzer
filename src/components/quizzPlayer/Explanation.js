import React, {PropTypes} from 'react';
import {CardText} from 'material-ui/Card';

const Explanation = ({explanation}) => {
        return (
            <div className="explanation">
                <CardText expandable={true}>
                    {explanation}
                </CardText>
            </div>
        );
    };

Explanation.propTypes = {
    explanation: PropTypes.object.isRequired
};