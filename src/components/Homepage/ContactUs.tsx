import { Component } from 'solid-js';
import Styles from "../../styles/Homepage/ContactUs.module.scss";
import Contactus from "../../assets/template-assets/contactus.jpg";

const ContactUs: Component = () => {
    return (
        <div class={Styles.contact_banner}>
            <div class={Styles.left}>
                <img src={Contactus}/>
            </div>
            <div class={Styles.right}>
                <form>
                    <h1>Get in touch!</h1>
                    <input type="text" placeholder='Name' id="name" name="name"/>
                    <input type="email" placeholder='Email' id="email" name="email"/>
                    <input type="text" placeholder='Contact No.' id="contact" name="contact"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;