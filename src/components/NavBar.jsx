import React from 'react'
import AppBar from 'material-ui/AppBar';
import Actions from '../actions/LoginActions'
import AuthStore from '../stores/AuthStore'
import QuizzStore from '../stores/QuizzStore'
import connectToStores from 'alt-utils/lib/connectToStores';
import {withRouter} from 'react-router'
import IconButton from 'material-ui/IconButton';
import LoginCircle from 'material-ui/svg-icons/action/account-circle'

@connectToStores
class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    static getStores() {
        //console.log('Quizzer trying to get Stores');
        return [AuthStore, QuizzStore];
    }

    static getPropsFromStores() {
        //console.log('Login getting props from store AuthStore')
        let authState = AuthStore.getState();
        let quizzState = QuizzStore.getState();
        return {authState, quizzState};
    }

    render() {
        return (
            <div className="NavBar">
                <AppBar title="Quizzer" iconElementRight={<IconButton><LoginCircle /></IconButton>}/>
            </div>
        )
    }

}

let routedNavBar = withRouter(NavBar);
console.debug('routed NavBar component initialised')
export default routedNavBar;

NavBar.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};