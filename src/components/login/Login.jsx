import React from 'react'
import {Card, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Actions from '../../actions'
import LoginFailed from './LoginFailed.jsx'
import QuizzStore from '../../stores/QuizzStore'
import connectToStores from 'alt-utils/lib/connectToStores';
import {withRouter} from 'react-router'

@connectToStores
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    static getStores() {
        console.log('Login trying to get stores');
        return [QuizzStore];
    }

    static getPropsFromStores() {
        console.log('Login getting props from store Quizzer')
        return QuizzStore.getState();
    }

    onClick = () => {
        console.log('login clicked');
        console.log(this.props.router)
        Actions.login(this.props.router, this.state.email, this.state.password);
    }

    passwordChanged = (password) => {
        this.setState({ password: event.target.value });
    }

    emailChanged = (event) => {
        this.setState({ email: event.target.value });
    }

    render() {
        console.log('rendering login, props.authdata:');
        if(this.props.authData){
            console.log(this.props.authData.err)
            console.log(this.props.authData.user)
        }
        return (
            <div className="login">
                <LoginFailed hidden={this.props.authData && !this.props.authData.err} />
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
        )
    }

}

let routedLogin = withRouter(Login);
console.debug('routed login is...')
console.debug(routedLogin)
console.debug(routedLogin.context)
export default routedLogin;

Login.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};