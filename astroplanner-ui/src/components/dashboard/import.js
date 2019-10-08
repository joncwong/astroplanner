import React from 'react';
import Button from '@material-ui/core/Button';

const importButtonStyle = {
    display: 'none'
}

const ImportButton = ({onChange}) => (
    <div>
        <input
            accept="text/plain"
            id="outlined-button-file"
            type="file"
            onChange={onChange}
            style={importButtonStyle}
        >
        </input>
        <label htmlFor="outlined-button-file">
        <Button
            variant="outlined"
            component="span"
        >
            Import Object List
        </Button>
        </label>
    </div>
);

export default ImportButton;
