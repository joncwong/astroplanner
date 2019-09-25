import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class AuthPage extends Component {
    render() {
        return ( 
            <TextField
                label="Password"
                type="password"
            />
        )
    }
}

export default AuthPage;
