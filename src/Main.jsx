import React from 'react';

import About from './components/Hero1';
import Faq from './components/JoinUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/AboutUS';
import Services from './components/Services'
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Whoweare from './components/Whoweare';

const Main = () =>{
    return(
        <>
        <Navbar/>
        <Hero />
        <About />
        <Services />
        <Whoweare/>
        <Pricing />
        <ContactUs/>
        <Faq/>
        <Footer />
        </>
    )
}


export default Main;