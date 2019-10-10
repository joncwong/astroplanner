import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const importCardStyle = {
    marginTop: '20px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '30px',
    width: '80%',
    maxHeight: '70%'
}

const filePreviewerStyle = {
    marginTop: '20px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '30px',
    maxHeight: '500px',
    maxWidth: '700px',
    whiteSpace: 'pre-line',
    overflow: 'scroll',
};

const importTitleStyle = {
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    display: 'block'
}

const importButtonStyle = {
    float: 'right'
}

const FilePreviewer = (props) => (
    <Card style={importCardStyle}>
        <CardHeader
            style={importTitleStyle}
            title="Import Previewer">
        </CardHeader>
        <CardContent style={filePreviewerStyle}>
            <Typography variant="body2" color="textSecondary" component="p">
                {Array.isArray(props.targetList) ? (
                    <p>{props.targetList.join('\n')}</p>
                ) : (
                    <p>Nothing to preview</p>)}
            </Typography>
        </CardContent>
        <CardActions style={importButtonStyle}>
            <Button size="small" color="primary">
                Import
            </Button>
        </CardActions>
    </Card>
)

export default FilePreviewer;
