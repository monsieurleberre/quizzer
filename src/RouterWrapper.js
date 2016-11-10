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
        this.requireAuthDataPending = false;
    }

    requireAuthData(nextState, replace, next) {
        console.debug("wrapped in route requireAuthData");
        if(this.requireAuthDataPending) return;
        this.requireAuthDataPending = true;
        setTimeout(() => this.props.requireAuthData(nextState, replace, next), 1);
        //this.props.requireAuthData(nextState, replace, next);
    }

    render() {
        console.debug('wrapper this.requireAuthData');
        console.debug(this.requireAuthData);
        return (<Router {...this.props} routes={Routes(this.requireAuthData)} />);
    }
}

RouterWrapper.propTypes = {
    requireAuthData: PropTypes.func.isRequired,
    requireAuthDataPending: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    console.debug("map state to prop with state");
    console.debug(state);
    return {
        requireAuthDataPending: routerActions.is
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