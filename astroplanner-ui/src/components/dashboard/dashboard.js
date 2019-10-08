import React, { Component } from 'react';
import ImportButton from './import.js';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            importFile: null
        }
        this.onFileChange = this.onFileChange.bind(this)
    }
    
    onFileChange = async (e) => {
        let file = e.target.files[0]
        if (file === undefined) {
            return
        }
        else {
            await this.setState({
                importFile: file
            })
        }
        console.log(this.state.importFile)
    }

    render() {
        return(
            <div>
                <h4> Dashboard </h4>
                <ImportButton
                    onChange={this.onFileChange}>
                </ImportButton>
            </div>
        )}
}

export default Dashboard;
