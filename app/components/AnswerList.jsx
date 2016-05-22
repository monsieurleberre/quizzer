module.exports = (function () {
    var React = require('react');
    var ReactDOM = require('react-dom');

    var AnswerList = React.createClass({
        render:function(){
            var answerNodes = this.props.answers.map(a => <Answer answer={a} />)
            
            return (
                <div className="answerList" answerType={this.props.answerType} >
                    {this.answerNodes}
                </div>
                )
        }
    })
    return AnswerList;
})();