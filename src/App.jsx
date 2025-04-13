import styles from  './App.module.css';
import { Navbar } from './component/Navbar/Navbar';
import { Hero } from './component/hero/hero';
import { About } from './component/About/About';
export default function App() {
    return (
        <main>
            <div className={styles.App}>
                <Navbar/>
                <Hero />
                <About />
            </div>
        </main>
    )
}