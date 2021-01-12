import React, {Fragment} from 'react';
import { Grid } from '@material-ui/core';


import TopIcon from './topIcon';
import JSIcon from '../../Images/javascript.svg';
import CSS from '../../Images/css.svg';
import ReactIcon from '../../Images/React-icon.svg';
import htmlIcon from '../../Images/html.svg';
import githubIcon from '../../Images/github.svg';
import nodeIcon from '../../Images/nodejs.svg';
import sqlIcon from '../../Images/sql.svg';
import noSqlIcon from '../../Images/mongo.svg';

const TopIcons = () => {

    return(

    <Fragment>
        <Grid container xs={12}
        direction="row"
        justify="space-around"
        alignItems="center"
        id="iconsContainer"
        >
            <Grid item xs={6} sm={4} >
                <TopIcon IconImage={JSIcon}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <TopIcon IconImage={CSS}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <TopIcon IconImage={htmlIcon}/>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4} sm={4}>
                <TopIcon IconImage={ReactIcon}/>
            </Grid>
            
            <Grid item xs={4} sm={4}>
                <TopIcon IconImage={githubIcon}/>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6} sm={4}>
                <TopIcon IconImage={nodeIcon}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <TopIcon IconImage={sqlIcon}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <TopIcon IconImage={noSqlIcon}/>
            </Grid>
        </Grid>
    </Fragment>
    )
}

export default TopIcons; 