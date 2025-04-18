import styles from "./Navbar.module.css"
import { useState } from "react";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.tittle} href='/'>PortFolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen ? closeIcon : menuIcon} alt="menu-button" onClick={() => { setMenuOpen(!menuOpen) }} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}