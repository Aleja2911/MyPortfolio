import React, { Fragment } from "react";
import './App.css';
import Navbar from './Components/navBar/navbar';
import TopIcons from './Components/topIconsFol/topIcons';
import Profile from './Components/profileFol/profile';

import { Grid } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiGridContainer: {
      width: '100%',
      display: 'flex',
    },
  },
});


function App() {

  return (
    <Fragment className="App">
     <Navbar />
        <TopIcons />   
       <Profile />
        <h2> Projects </h2> 
 
    </Fragment>
  );
}

export default App;
