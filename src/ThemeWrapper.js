import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({

});

const ThemeWrapper = (props) => {

    return (
        <div className="themeWrapper" width="400">
            <MuiThemeProvider muiTheme={muiTheme}>
                {props.children}
            </MuiThemeProvider>
        </div>
    );

};

ThemeWrapper.propTypes = {
  props : PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export default ThemeWrapper;