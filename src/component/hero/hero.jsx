import myImage from "../../assets/hero/heroImage.png";
import styles from "./hero.module.css"
export function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I’m Amit Kr.</h1>
                <p className={styles.description}>I’m a Full-Stack Developer with 2.5+ years of experience using React, Angular, Node.js, Express, MongoDB, and MariaDB. I build fast, responsive, and secure web apps with clean UI and robust backend architecture.
                    Let’s connect and build something awesome!</p>
                <a className={styles.contactBtn} href="mailto:kumar.amit14jan@gmail.com">Contact Me</a>
            </div>
            <img src={myImage} className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}