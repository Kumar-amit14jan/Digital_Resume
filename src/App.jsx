import styles from  './App.module.css';
import { Navbar } from './component/Navbar/Navbar';
import { Hero } from './component/hero/hero';
import { About } from './component/About/About';
import { Experience } from './component/Experience/Experience';
import { Projects } from './component/Project/project';
import { Contact } from './component/contact/contact';
export default function App() {
    return (
        <main>
            <div className={styles.App}>
                <Navbar/>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </main>
    )
}