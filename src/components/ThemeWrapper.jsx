import React, {PropTypes} from 'react';
//import mui from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import AuthRouter from '../routes/AuthRouter.jsx';
//import Quizzer from './Quizzer.jsx';

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
  children: PropTypes.element
};

export default ThemeWrapper;