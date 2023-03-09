import React from 'react';
import { Pages } from "./pages/Route.js";
import ContactUs  from "./pages/Components/Sections/ContactUs.js";
import Copyright  from "./pages/Components/Sections/Copyright.js";
import Links  from "./pages/Components/Sections/Links.js";
import LandAck from './pages/Components/Sections/LandAcknowledge.js';
import Navbar from './pages/Components/Sections/Navbar.js';
import "./Styles/bootstrap.css";
import "./Styles/main.css";
import "./Styles/w3.css";

function App() {
    return (
        <>
            <div className="App">
                <Navbar/>
                <Pages/>
                <ContactUs/>
                <hr/>
                <Links/>
                <hr/>
                <LandAck/>
                <hr/>
                <Copyright/>
            </div>
        </>
        );
    }
        export default App;
