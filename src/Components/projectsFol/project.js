import React, {Fragment} from 'react';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";

const Project = ({ ProjectImage, ProjectLink }) => {
const history = useHistory();

    const handleProjectClick = (pl) => {
        let path = window.open(pl);
        history.push(path);
    }
    return ( 
        <Fragment>
            <Grid item sm={4}>
            <Button onClick={()=> {handleProjectClick(ProjectLink)}}>
                <Card>
                    <CardMedia
                    component="img"
                    alt="Icon"
                    image={ProjectImage}
                    title="Icon"
                    // className={classes.media}
                    />                  
                </Card>
             </Button>
            </Grid>
        </Fragment>
    );
}
 
export default Project;