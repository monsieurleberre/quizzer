import React from 'react';
import mui from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import QuizzPlayer from './QuizzPlayer.jsx'

const muiTheme = getMuiTheme({
    
});

export default class ThemeWrapper extends React.Component {
    constructor(props){
        
        super(props);
        
        //muiTheme = getMuiTheme()
        
    }

    
    render() {
        return (
            <div className="themeWrapper" width="400">
                <MuiThemeProvider muiTheme={muiTheme}>
                    <QuizzPlayer question={this.props.question} />
                </MuiThemeProvider>
            </div>        
            )
    }
}