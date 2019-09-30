import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { encode } from 'base-64';

const authUrl = 'http://localhost:5000/auth'

class AuthPage extends Component {
    render() {
        return (
            <div>
                <TextField
                    label="Username"
                    onChange={this.usernameChange}
                />
                <TextField
                    label="Password"
                    type="password"
                    onChange={this.passwordChange}
                    onKeyDown={this.handleKeyDown} 
            />
            </div>
        )
    }

    usernameChange = (user) => {
        this.setState({
            "username": user.target.value
        })
    }

    passwordChange = (password) => {
        this.setState({
            "password": password.target.value
        })
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            let successfulLogin = null
            let username = this.state.username
            let password = this.state.password
            console.log(username)
            console.log(password)
            successfulLogin = login(username, password)
        }
    }
}

async function login(username, password) {
    let response = await fetch(authUrl, {
        method: "POST",
        headers: new Headers({
            "Authorization": "Basic " + encode(username + ":" + password),
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({
            "Authorization": "Test"
        })
    });
    let authorized = await response.json()
    console.log(authorized)
    return authorized
}

export default AuthPage;
