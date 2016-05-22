module.exports = (function () {
    var React = require('react');
    var ReactDOM = require('react-dom');

    var QuestionFrame = React.createClass({
        render:function(){
            return (
                <div className="QuestionFrame">
                    <Question question="{this.props.key} w" />
                    <AnswerList />
                    <Explanation />
                </div>
                )
        }
    })
    return QuestionFrame;
})();