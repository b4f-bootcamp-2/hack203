import Navbar from "./Navbar"
import styles from './Olympus.module.css'

export default function Clients() {
    return (<div>

        <div className={styles.mains1}>
            <h1 className={styles.title}>My Clients</h1>
            <ul className={styles.title}>
                <li className={styles.title}>Ana</li>
                <li className={styles.title} >Joana</li>
                <li className={styles.title}>Justin</li>
                <li className={styles.title}>Raphael</li>
                <li className={styles.title}>Catarina</li>
                <li className={styles.title}>Isabel</li>
                <li className={styles.title}>Santiago</li>

            </ul>
        </div>
        <Navbar />
    </div>)
}