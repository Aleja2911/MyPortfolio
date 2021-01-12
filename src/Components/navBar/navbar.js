import React from "react";
import ContactNavbar from './contactNavbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import personalLogo from '../../Images/A.jpg'



const Navbar = () => {

return (
    <div>
        <AppBar  position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <img src={personalLogo} id="navLogo" alt='' />
                {/* <h2 style={{color: "purple"}}>
                Alejandra 
                </h2>
                <h2>
                Ossa Jimenez
                </h2> */}
                <ContactNavbar />
            </Toolbar>
        </AppBar>
    </div>
)

}

export default Navbar;