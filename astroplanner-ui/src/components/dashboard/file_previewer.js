import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const filePreviewerStyle = {
    marginTop: '20px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '30px',
    maxHeight: '500px',
    maxWidth: '700px',
    overflow: 'auto',
    whiteSpace: 'pre-line',
    display: 'block'
};

/* const FilePreviewer = (props) => ( */
    // <div>
    //     <h5>Import Previewer</h5>
    //     <Paper style={filePreviewerStyle}>
    //         {Array.isArray(props.targetList) ? (
    //             <div>
    //                 <p>{props.targetList.join('\n')}</p>
    //             </div>
    //         ) : (
    //             <p>Nothing to preview</p>
    //         )}
    //     </Paper>
    // </div>
/* ); */

const FilePreviewerTest = (props) => (
    <Card style={filePreviewerStyle}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Import Previewer
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {Array.isArray(props.targetList) ? (
                    <p>{props.targetList.join('\n')}</p>
                ) : (
                    <p>Nothing to preview</p>)}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </CardActions>
    </Card>
)

export default FilePreviewerTest;
