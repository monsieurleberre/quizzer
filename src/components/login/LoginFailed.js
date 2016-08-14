import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class LoginFailed extends React.Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    console.debug('handling close error dialog')
    //setTimeout(Actions.loginErrorSeen(true), 0);
  }

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