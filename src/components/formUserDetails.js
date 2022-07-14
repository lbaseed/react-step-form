import React, { Component } from 'react'
import { AppBar, Toolbar, Button, Typography, TextField,RaisedButton } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      // eslint-disable-next-line
      const {values} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='React Step Form' position='static' color=''>
          <Toolbar>
          
          <Typography variant="h6" color="inherit">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
          </AppBar>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails