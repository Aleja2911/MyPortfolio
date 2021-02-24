import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link } from '@material-ui/core';


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
    const gitHubLink = 'https://github.com/Aleja2911';
    const linkedinLink = 'https://www.linkedin.com/in/alejandra-ossa-jimenez/';

    return (
        <Grid container
        direction="row"
        justify="flex-end"
        alignItems="center"
        >
        <IconButton >
            <Link href='mailto: alejandra.ossa.jimenez@gmail.com'>
            <MailIcon className={classes.icons}/>
            </Link>
        </IconButton>   
        <IconButton>   
            <Link href={gitHubLink} rel='noopener noreferrer' target='_blank'>
            <GitHubIcon />
            </Link>
        </IconButton>
        <IconButton >
            <Link href={linkedinLink} rel='noopener noreferrer' target='_blank'>
            <LinkedInIcon />
            </Link>
        </IconButton>
        </Grid>
        
    )
}

export default ContactNavbar;