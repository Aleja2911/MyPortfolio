import React from 'react';
import { Grid } from '@material-ui/core';

import ProfilePhoto from './ProfilePhoto';
// import logoImg from '../Images/A2.svg';
import ProfileCardSlide from './profileCardSlide';

const Profile = () => {
  return (
    <Grid
      sm={12}
      container
      direction="row"
      justify="center"
      alignItems="center"
      id="profile"
      style={{  paddingTop: '3em', paddingBottom: '3em' }}
    >
    
       <Grid item sx={12} sm={6}>
        <ProfilePhoto />
      </Grid>
      <Grid  style={{padding: 0}} item sm={5}>   
          <ProfileCardSlide />
      </Grid> 
      </Grid>
  );
};

export default Profile;
