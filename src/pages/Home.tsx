import { Component } from 'solid-js';
import HomeBanner from '../components/Homepage/HomeBanner';
import ContactUs from '../components/Homepage/ContactUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: Component = () => {
    return (
        <div >
            {/* <Navbar/> */}
            <HomeBanner/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Home;