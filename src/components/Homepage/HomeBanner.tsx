import { Component } from 'solid-js';
import BannerImage from "../../assets/template-assets/homebanner.jpg";
import Styles from "../../styles/Homepage/HomeBanner.module.scss";
import {Link} from "solid-app-router"

const HomeBanner: Component = () => {
    return (
        <div class={Styles.container}>
            <div class={Styles.image}>
                <img src={BannerImage}/>
            </div>
            <div class={Styles.overlay}/>
            <div class={Styles.content}>
                <p class={Styles.header}>Welcome to Heliverse</p>
                <p class={Styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link href="/about">
                    <button>More About us</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeBanner;