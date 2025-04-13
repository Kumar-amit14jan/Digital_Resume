import { AboutImage, cursorIcon, ServerIcon, UiIcon } from "../../assets/about";
import styles from "./About.module.css"
export function About() {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.tittle}>ABOUT</h2>
            <div className={styles.content}><img className={styles.aboutImage} src={AboutImage} alt="me sitting with laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="Front-end image" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Built responsive and optimized web applications using React.js and Angular, with a strong focus on performance, authentication, and user experience.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={ServerIcon} alt="Server-Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Developed scalable and high-performance REST APIs using Node.js, Express.js, MongoDB, and MariaDB, ensuring secure data handling and efficient backend logic.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={UiIcon} alt="Ui-Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>Designed and implemented multiple landing pages and cohesive design systems, enhancing visual appeal and maintaining consistent brand identity across platforms.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}