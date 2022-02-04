import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Navbar from "./Navbar";
import styles from './Olympus.module.css'

export default function Calendario() {
    const [date, setDate] = useState(new Date());

    return (
        <div className='app'>
            <h1 className={styles.maincalender}>Your Schedule</h1>
            <div className={styles.calendario}>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
            <Navbar />
            <div className={styles.maincalender1}>
                <h1 className={styles.calenderText}>Maria requested a workout on this day.</h1>

            </div>
        </div>
    );
}

