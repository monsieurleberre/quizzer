import React from 'react'
import {Card, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Actions from '../../actions'
import LoginFailed from './LoginFailed.jsx'

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
        console.log(this.context.router)
        Actions.login(this.context.router, this.state.email, this.state.password);
    }

    passwordChanged = (password) => {
        this.setState({ password: event.target.value });
    }

    emailChanged = (event) => {
        this.setState({ email: event.target.value });
    }

    render() {
        console.log('rendering login, props.err:');
        console.log(this.props.err)
        return (
            <div className="login">
                <LoginFailed hidden={!this.props.err} />
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

export default withRouter(new Login());