import { projects } from "../../data/project";
import { ProjectCard } from "./projectCard";
import styles from "./project.module.css"
export function Projects() {
    return (
        <section id="projects" className={styles.container}><h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (
                            <ProjectCard key={id} project={project} />
                        )
                    })
                }
            </div></section>
    )
}