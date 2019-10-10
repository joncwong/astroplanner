import React, { Component } from 'react';
import AuthPage from '../auth-page/auth.js'
import Dashboard from '../dashboard/dashboard.js'
import Button from '@material-ui/core/Button';

const dashboardBannerStyle = {
    justifyContent: 'center',
    display: 'flex'
}

const logoutButtonStyle = {
    height: '50px',
    width: '100px',
}

class Homepage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            authorized: false
        }
    }

    componentDidMount = () => {
        document.title = "Astroplanner";
    }

    setAuthorized = (authorized) => {
        this.setState({
            authorized: authorized
        });
    }

    render() {
        let isLoggedIn = this.state.authorized;
        let viewableHomepage;

        if (isLoggedIn) {
            console.log(isLoggedIn)
            viewableHomepage = (
                <div>
                    <div style={dashboardBannerStyle}>
                        <h1>Astroplanner</h1>
                        <Button
                            size="small"
                            id="contained-button-file"
                            style={logoutButtonStyle}
                            onClick={ () => this.setAuthorized(false)}
                        >
                            Logout
                        </Button>
                    </div>
                    <Dashboard></Dashboard>
                </div>
            )
        }
        else {
            viewableHomepage = (
                <div>
                    <h1>Astroplanner</h1>
                    <AuthPage setAuthorized={this.setAuthorized}></AuthPage>
                </div>
            )
        }
        return (
            viewableHomepage
        );
    }

}

export default Homepage;
