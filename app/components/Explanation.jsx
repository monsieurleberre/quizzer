module.exports = (function () {
    var React = require('react');
    var ReactDOM = require('react-dom');

    var Explanation = React.createClass({
        render:function(){
            return (
                <div className="explanation">
                    {this.props.tip}
                </div>
                )
        }
    })
    return Explanation;
})();