import React,  {Fragment} from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import ProfilePic from '../../Images/Acropped.png';

const useStyles = makeStyles(theme =>({
    root: {  
        width: "100%", 
        height: "25em",
        marginTop: "5em",
        background: "transparent",
        boxShadow: 'none',
        [theme.breakpoints.down("xs")] : {
        maxWidth: "25em",
        height: "auto",
        marginTop: "2em",
        padding: "none",
        },
    },
    media: {
        
    }
}))
const ProfilePhoto = () => {
    const classes = useStyles();
    return ( 
        <Fragment>
        <Card className={classes.root}>
        <CardMedia   
            component="img"
            alt="propicture"
            image={ProfilePic}
            title="propicture"
            className={classes.media}
            id="imageDetails"
        />
            </Card>
        </Fragment>
     );
}
 
export default ProfilePhoto;