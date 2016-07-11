import React from 'react'
import AppBar from 'material-ui/AppBar';
import Actions from '../../actions/AuthActions'
import AuthStore from '../../stores/AuthStore'
import connectToStores from 'alt-utils/lib/connectToStores';
import {withRouter} from 'react-router'

@connectToStores
class Quizzer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    static getStores() {
        //console.debug('Login trying to get AuthStore');
        return [AuthStore];
    }

    static getPropsFromStores() {
        //console.debug('Login getting props from store AuthStore')
        let authState = AuthStore.getState();
        return authState;
    }

    onClick = () => {
        console.debug('login clicked');
        Actions.login(this.state.email, this.state.password, this.props.router, this.props.location);
    }

    passwordChanged = (password) => {
        this.setState({ password: event.target.value });
    }

    emailChanged = (event) => {
        this.setState({ email: event.target.value });
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
        )
    }

}

let routedLogin = withRouter(Login);
console.debug('routed Login component initialised')
export default routedLogin;

Login.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};