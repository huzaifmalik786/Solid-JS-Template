import { Component } from 'solid-js';
import HeroBanner from '../components/AboutUs/HeroBanner';
import Footer from '../components/Footer';
import ContactUs from '../components/Homepage/ContactUs';
import Navbar from '../components/Navbar';

const About: Component = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <HeroBanner/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default About;