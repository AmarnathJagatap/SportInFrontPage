import React from 'react';

import About from './components/Hero1';
import Faq from './components/JoinUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/AboutUS';
import Services from './components/Services'
import ContactUs from './components/ContactUs';

const Main = () =>{
    return(
        <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Pricing />
        <ContactUs/>
        <Faq/>
        <Footer />
        </>
    )
}


export default Main;