module.exports = (function () {
    var React = require('react');
    var ReactDOM = require('react-dom');

    var QuestionFrame = React.createClass({
        render:function(){
            return (
                <div className="QuestionFrame">
                    <Question content={this.props.content} />
                    <AnswerFrame />
                    <Explanation />
                </div>
                )
        }
    })
    return Question;
})();