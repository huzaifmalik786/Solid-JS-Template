import { Component } from 'solid-js';
import Styles from "../styles/Footer.module.scss";

const Footer: Component = () => {
    return (
        <div class={Styles.footer}>
            <h1>This is your footer</h1>
        </div>
    )
}

export default Footer;