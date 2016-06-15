import React from 'react'
import {Card, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Actions from '../actions'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        console.log('login clicked');
        let authData = {}
        Actions.login();
    }


    render() {
        return (
            <div className="login">
                <Card>
                    <CardTitle
                        title="Hello there"
                        subtitle="please look over your shoulder and rapidly type in your credentials" />
                    <CardText>
                        <TextField
                            hintText="somewhere@abovetherainbow.com"
                            floatingLabelText="eMail"
                            type="text"/><br />
                        <TextField
                            hintText="go on, type it in"
                            floatingLabelText="Password"
                            type="password"/><br />
                        <FlatButton 
                            onClick={this.onClick}
                            label="login">

                        </FlatButton>
                    </CardText>
                </Card>
            </div>
        )
    }

}

export default Login;