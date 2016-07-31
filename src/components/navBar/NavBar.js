import React from 'react';
import AppBar from 'material-ui/AppBar';
import {withRouter} from 'react-router';
import IconButton from 'material-ui/IconButton';
import LoginCircle from 'material-ui/svg-icons/action/account-circle';
import PopoverNavMenu from './PopoverNavMenu';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="NavBar">
                <AppBar title="Quizzer"
                
                    iconElementLeft={<PopoverNavMenu />}
                    iconElementRight={<IconButton><LoginCircle /></IconButton>}/>
            </div>
        );
    }

}

let routedNavBar = withRouter(NavBar);
console.debug('routed NavBar component initialised');
export default routedNavBar;

NavBar.propTypes = {
    router: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired
    }).isRequired
};