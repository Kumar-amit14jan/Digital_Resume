import styles from "./contact.module.css";
import { emailIcon, githubIcon, linkedinIcon } from "../../assets/contact"
export function Contact() {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={emailIcon} alt="email-icon" />
                    <a href="kumar.amit14jan@gmail.com">kumar.amit14jan@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedinIcon} alt="linkedin-icon" />
                    <a href="https://www.linkedin.com/in/amitnewdelhi/">linkedin.com/in/amitnewdelhi/</a>
                </li>
                <li className={styles.link}>
                    <img src={githubIcon} alt="github-icon" />
                    <a href="https://github.com/Kumar-amit14jan">github.com/Kumar-amit14jan</a>
                </li>

            </ul>
        </footer>
    )
}