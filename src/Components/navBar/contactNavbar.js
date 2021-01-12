import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles =  makeStyles({
    display: 'flex',
    flexDirection: 'row-reverse' 
})

const ContactNavbar = () => {
    const classes = useStyles()

    return (
        <Grid container
        direction="row"
        justify="flex-end"
        alignItems="center"
        >
        <IconButton >
            <MailIcon className={classes.icons}/>
        </IconButton>   
        <IconButton>   
            <GitHubIcon />
        </IconButton>
        <IconButton >
            <LinkedInIcon />
        </IconButton>
        </Grid>
        
    )
}

export default ContactNavbar;