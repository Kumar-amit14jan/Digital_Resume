import { skills } from "../../data/skill.js";
import { experiences } from "../../data/history.js";
import  styles  from "./Experience.module.css"
export function Experience() {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}><img src={skill.imageSrc} /></div>
                                <p>{skill.title}</p>
                            </div>
                        )
                    })
                }</div>
                <ul className={styles.history}>
                    {
                        experiences.map((experience, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>
                                    <img src={experience.imageSrc} alt={experience.title} />
                                    <div className={styles.historyItemDetails}>
                                        <div className={styles.historyItemDetails}><h3>{`${experience.role} , ${experience.organisation}`}</h3>
                                            <p>{`${experience.startDate}-${experience.endDate}`}</p>
                                            <ul>{
                                                experience.experiences.map((experience, id) => {
                                                    return (
                                                        <li key={id}>
                                                            {experience}
                                                        </li>
                                                    )
                                                })
                                            }</ul>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}