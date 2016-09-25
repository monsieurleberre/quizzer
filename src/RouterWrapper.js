import React, {PropTypes} from 'react';
import Routes from './Routes';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {bindActionCreators} from 'redux';
import routerActions from './actions/routerActions';

class RouterWrapper extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.requireAuthData = this.requireAuthData.bind(this);
    }

    requireAuthData(nextState, replace) {
        console.debug("wrapped in route requireAuthData");
        this.props.requireAuthData(nextState, replace);
    }

    render() {
        console.debug('wrapper this.requireAuthData');
        console.debug(this.requireAuthData);
        return (<Router {...this.props} routes={Routes(this.requireAuthData)} />);
    }
}

RouterWrapper.propTypes = {
    requireAuthData: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    console.debug("map stae to prop with state")
    console.debug(state);
    return {
        rwprops: "some props"
    };
}

function mapDispatchToProps(dispatch) {
    console.debug("map dispatcth to wrapped routes props");
    return {
        requireAuthData: bindActionCreators(routerActions.requireAuthData, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouterWrapper);