import React from 'react';
import styles from './Olympus.module.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    return (
        <div valgin="bottom" className={styles.navtab}>
            <span className="material-icons" >
                <Link to="/dashboard" className={styles.navicons}>home</Link>
            </span>
            <span className="material-icons">
                <Link to="/calender" className={styles.navicons}>calendar_today</Link>
            </span>

            <span className="material-icons">
                <Link to="/clients" className={styles.navicons}>emoji_people</Link>
            </span>

            <span className="material-icons" >
                <Link to="/stats" className={styles.navicons}>leaderboard</Link>
            </span>
            <span className="material-icons" >
                <Link to="/account" className={styles.navicons}>account_circle</Link>
            </span>
        </div>);
}
