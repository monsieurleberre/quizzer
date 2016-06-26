import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AuthStore from '../../stores/AuthStore'
import connectToStores from 'alt-utils/lib/connectToStores';
import Actions from '../../actions/LoginActions'

@connectToStores
export default class LoginFailed extends React.Component {

  constructor(props) {
    super(props);
  }
  
  static getStores() {
      //console.log('Login trying to get AuthStore');
      return [AuthStore];
  }

  static getPropsFromStores() {
      //console.log('Login getting props from store AuthStore')
      let authState = AuthStore.getState();
      return authState;
  }

  handleClose = () => {
    console.log('handling close error dialog')
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
    console.log('rendering LoginFailed')
    console.log(this.props)
    return (

      <div>
        <Dialog
          title="Failed to login, please try again"
          actions={actions}
          modal={false}
          open={this.props.err && !this.props.errorHasBeenSeen ? true : false}
          onRequestClose={this.handleClose}
        >
          Are you sure about that password / email ?
        </Dialog>
      </div>
    );
  }
}