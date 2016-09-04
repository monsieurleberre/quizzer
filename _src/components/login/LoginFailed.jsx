import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AuthStore from '../../stores/AuthStore'
import connectToStores from 'alt-helpers/lib/connectToStores';
import Actions from '../../actions/AuthActions'

@connectToStores
export default class LoginFailed extends React.Component {

  constructor(props) {
    super(props);
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

  handleClose = () => {
    console.debug('handling close error dialog')
    setTimeout(Actions.loginErrorSeen(true), 0);
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
        onClick={this.handleClose}
        />,
    ];
    return (

      <div>
        <Dialog
          title="Failed to login, please try again"
          actions={actions}
          modal={false}
          open={this.props.err && !this.props.errorHasBeenSeen ? true : false}
          onRequestClose={this.handleClose}
          >
          Are you sure about that password / email?
        </Dialog>
      </div>
    );
  }
}