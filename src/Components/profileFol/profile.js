import React from "react";
import { Grid } from "@material-ui/core";

import ProfilePhoto from "./ProfilePhoto";
// import logoImg from '../Images/A2.svg';
import ProfileCardSlide from "./profileCardSlide";

const Profile = () => {
  return (
    <Grid
      sm={12}
      container
      direction="row"
      justify="center"
      alignItems="center"
      id="profile"
      style={{ paddingTop: "1em", paddingBottom: "3em" }}
    >
      <Grid item sm={1}></Grid>
      <Grid item sx={12} sm={5}>
        <ProfilePhoto />
      </Grid>
      <Grid style={{ padding: 0 }} item sm={4}>
        <ProfileCardSlide />
      </Grid>
      <Grid item sm={1}></Grid>
    </Grid>
  );
};

export default Profile;
