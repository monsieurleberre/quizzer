import React from 'react';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import LoginFailed from './LoginFailed';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import loginActions from '../../actions/loginActions';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: '',
            user: null,
            err: null,
            isFetching: false
        };
        this.onClick = this.onClick.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user || this.props.user) {
            console.debug('transition to next router location');

            if (this.props.location.state && this.props.location.state.nextPathname) {
                this.props.router.replace(this.props.location.state.nextPathname);
            } else {
                this.props.router.replace('/');
            }
        }
    }

    onClick() {
        console.debug('login clicked');
        loginActions.loginButtonClicked(this.state).next();
        loginActions.fecthAuthData({
            email: this.state.email, 
            password: this.state.password});
    }
    
    passwordChanged(event) {
        this.setState({ password: event.target.value });//eslint-disable-line react/no-set-state
    }

    emailChanged(event) {        
        this.setState({ email: event.target.value });//eslint-disable-line react/no-set-state
    }

    render() {
        return (
            <div className="login">
                <LoginFailed />
                <Card>
                    <CardTitle
                        title="Hello there"
                        subtitle="please look over your shoulder and rapidly type in your credentials" />
                    <CardText>
                        <TextField
                            hintText="somewhere@abovetherainbow.com"
                            floatingLabelText="eMail"
                            type="text"
                            value={this.state.email}
                            onChange={this.emailChanged}/><br />
                        <TextField
                            hintText="go on, type it in"
                            floatingLabelText="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.passwordChanged}/><br />
                    </CardText>
                    <CardText style={{ alignContent: 'right' }}>
                        <FlatButton
                            primary={true}
                            onClick={this.onClick}
                            label="login" />
                    </CardText>
                </Card>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
};

const mapStateToProps = (state, { params }) => ({
    user: loginActions.getUser(state, params.login),
    err: loginActions.getError(state),
    isFetching: loginActions.isFetching(state)
});


let connectedLogin = connect(mapDispatchToProps, mapStateToProps)(Login);
let routedLogin = withRouter(connectedLogin);
console.debug('routed Login component initialised');
export default routedLogin;

Login.propTypes = {
    user: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    router: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired,
        replace: React.PropTypes.func.isRequired
    }).isRequired
};