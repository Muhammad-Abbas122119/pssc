import React from "react";

import Header from "./Header";
import Navbar from "./Navbar";
import Home from './Home'
import Services from "./Services";
import About from './About'
import Product from "./Product";
import TeamMembers from './TeamMembers'
import Testimonial from './Testimonial'
import FooterNavbar from "./FooterNavbar";
import {Footer} from './Footer'
import './index.css'


const App = ()=>{
    return(

        <div>
            <Header />
            <Navbar />
            <Home />
            <Services />
            <About />
            <Product />
            <Testimonial />
            <TeamMembers />
            <FooterNavbar />
            <Footer />
    </div>
        )
}

export default App ;