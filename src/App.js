import React, { Fragment } from "react";
import './App.css';

import Navbar from './Components/navBar/navbar';
import TopIcons from './Components/topIconsFol/topIcons';
import Profile from './Components/profileFol/profile';
import Projects from './Components/projectsFol/projects';


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
        <h2 style={{display: "flex", justifyContent: "center", marginTop: "3em"}}> Projects </h2> 
        <Projects />
    </Fragment>
  );
}

export default App;
