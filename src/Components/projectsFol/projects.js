import React, {Fragment} from 'react';
import Project from './project';
import FYSImage from '../../Images/FindYourScience.jpg';
import { Grid } from '@material-ui/core';

const Projects = () => {
    const FYSLink = 'https://find-your-science.netlify.app/'

    return (  
        <Grid
            sm={12}
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            id="projects"
            style={{  paddingTop: '3em', paddingBottom: '3em' }}
            >
            <Project ProjectImage={FYSImage} ProjectLink={FYSLink}/>
            <Project ProjectImage={FYSImage}/>

        </Grid>
    );
}
 
export default Projects;