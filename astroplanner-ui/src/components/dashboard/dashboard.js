import React, { Component } from 'react';
import ImportButton from './import.js';
import FilePreviewerTest from './file_previewer.js';
import Schedule from './schedule.js';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            importFile: null,
            targetList: null
        }
        this.onFileChange = this.onFileChange.bind(this)
    }
    
    onFileChange = async (e) => {
        let file = e.target.files[0]
        let text;
        if (file === undefined) {
            return
        }
        else {
            text = await file.text();
            let targetList = text.split('\n')
            await this.setState({
                importFile: file,
                targetList: targetList
            })
        }
    }

    render() {
        return(
            <div>
                <h4> Dashboard </h4>
                <Schedule></Schedule>
                <ImportButton
                    onChange={this.onFileChange}>
                </ImportButton>
                <FilePreviewerTest targetList={this.state.targetList}></FilePreviewerTest>
            </div>
        )}
}

export default Dashboard;
