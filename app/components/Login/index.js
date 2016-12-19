/**
*
* Login
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


function Login(emailChanged, passwordChanged, loginClicked) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Card>
        <CardTitle
          title={<FormattedMessage {...messages.helloStranger} />}
          subtitle="please look over your shoulder and rapidly type in your credentials"
        />
        <CardText>
          <TextField
            hintText="somewhere@abovetherainbow.com"
            floatingLabelText="eMail"
            type="text"
            value="" // {this.state.email}
            onChange={emailChanged}
          /><br />
          <TextField
            hintText="go on, type it in"
            floatingLabelText="Password"
            type="password"
            value="" // {this.state.password}
            onChange={passwordChanged}
          /><br />
        </CardText>
        <CardText style={{ alignContent: 'right' }}>
          <FlatButton
            primary
            onClick={loginClicked}
            label="login"
          />
        </CardText>
      </Card>
    </div>
  );
}

export default Login;
