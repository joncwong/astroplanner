import React, { Component } from 'react';
import ImportButton from './import.js';
import FilePreviewerTest from './file_previewer.js';

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
            console.log(typeof text)
            let targetList = text.split('\n')
            console.log(typeof targetList)
            await this.setState({
                importFile: file,
                targetList: targetList
            })
        }
        console.log('importFile: ')
        console.log(this.state.importFile)
        console.log('text: ')
        console.log(text)
        console.log(typeof text)
        console.log(text.split('\n').length)
        console.log(this.state.targetList)
    }

    render() {
        return(
            <div>
                <h4> Dashboard </h4>
                <ImportButton
                    onChange={this.onFileChange}>
                </ImportButton>
                <FilePreviewerTest targetList={this.state.targetList}></FilePreviewerTest>
            </div>
        )}
}

export default Dashboard;
