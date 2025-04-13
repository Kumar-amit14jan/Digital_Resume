import styles from  './App.module.css';
import { Navbar } from './component/Navbar/Navbar';
export default function App() {
    return (
        <main>
            <div className={styles.App}>
                <Navbar/>
            </div>
        </main>
    )
}