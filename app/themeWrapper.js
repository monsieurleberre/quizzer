import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
const muiTheme = getMuiTheme({

});

const ThemeWrapper = (props) => 

     (
        <MuiThemeProvider muiTheme={muiTheme}>
            {props.children}
        </MuiThemeProvider>
    )

;

ThemeWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ThemeWrapper;
