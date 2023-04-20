import { Component } from 'solid-js';
import Styles from "../styles/Navbar.module.scss"
import Logo from "../assets/template-assets/nav_logo.png";
import { Link } from 'solid-app-router';

const Navbar: Component = () => {
    return (
        <div class={Styles.navbar}>
            <div class={Styles.left_section}>
                <img src={Logo}/>
            </div>
            <div class={Styles.mid_section}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>
            <div class={Styles.right_section}>
                <h1>Navbar</h1>
            </div>
        </div>
    )
}

export default Navbar;