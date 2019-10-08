import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { encode } from 'base-64';

const authUrl = 'http://localhost:5000/auth'

class AuthPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "username": "",
            "password": "",
            "message": ""
        };
    }

    render() {
        return (
            <div>
                <TextField
                    label="Username"
                    onChange={this.usernameChange}
                    onKeyDown={this.handleKeyDown}
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
        });
    }

    passwordChange = (password) => {
        this.setState({
            "password": password.target.value
        });
    }

    handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            let username = this.state.username;
            let password = this.state.password;
            let loggedIn = await this.login(username, password);
            this.props.setAuthorized(loggedIn)
        }
    }

    login = async (username, password) => {
        let response = await fetch(authUrl, {
            method: "GET",
            headers: new Headers({
                "Authorization": "Basic " + encode(username + ":" + password),
                "Content-Type": "application/json"
            })
        })
        let authResponse = await response.json();
        let loggedIn = authResponse['authorized'];
        return loggedIn 
    }
}

export default AuthPage;
