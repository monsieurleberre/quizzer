import React from 'react'
import AppBar from 'material-ui/AppBar';
import Actions from '../../actions/AuthActions'
import AuthStore from '../../stores/AuthStore'
import QuizzStore from '../../stores/QuizzStore'
import connectToStores from 'alt-helpers/lib/connectToStores';
import {withRouter} from 'react-router'
import IconButton from 'material-ui/IconButton';
import LoginCircle from 'material-ui/svg-icons/action/account-circle'
import PopoverNavMenu from './PopoverNavMenu.jsx'

const navigationMenu = () => (
    <DropDownMenu>
        <MenuItem value={1} primaryText="Play" containerElement={<Link to={'player'} />}/>
        <MenuItem value={2} primaryText="Edit" containerElement={<Link to={'editor'} />}/>
    </DropDownMenu>
)

@connectToStores
class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    static getStores() {
        //console.debug('Quizzer trying to get Stores');
        return [AuthStore, QuizzStore];
    }

    static getPropsFromStores() {
        //console.debug('Login getting props from store AuthStore')
        let authState = AuthStore.getState();
        let quizzState = QuizzStore.getState();
        return { authState, quizzState };
    }

    render() {
        return (
            <div className="NavBar">
                <AppBar title="Quizzer"
                    iconElementLeft={<PopoverNavMenu />}
                    iconElementRight={<IconButton><LoginCircle /></IconButton>}/>
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