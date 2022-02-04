import React, { useState, useEffect } from 'react';
import styles from './Olympus.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Dashboard(props) {

  const navigate = useNavigate()
  let token = props.token


  const [name, setName] = useState("")

  // function formatDate(date) {
  //   let d = new Date(date),
  //     month = '' + (d.getMonth() + 1),
  //     day = '' + d.getDate(),
  //     year = d.getFullYear();

  //   if (month.length < 2)
  //     month = '0' + month;
  //   if (day.length < 2)
  //     day = '0' + day;

  //   return [year, month, day].join('-');
  // }


  function getName() {
    fetch('/api/name', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    }).then(res => {

      return res.json()
    })
      .then(data => {
        setName(data)
      })
      .catch(error => console.log(error))
  }

  function checkProfile() {
    fetch('/api/checkProfile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    }).then(res => {
      if (res.status == 404) {
        navigate("/profile")
        return
      }
      getName()

      return
    })
      .catch(error => console.log(error))
  }


  useEffect(() => {
    checkProfile()

  }, []);



  return (<div>
    <div className={styles.form}>
      <div className={styles.main}>
        <h1 className={styles.title}>Welcome {name}!</h1>

        <Navbar />
      </div>
    </div>
    <div className={styles.main2}>
      <h1 className={styles.titlemain2}>Workouts<br />Today:<br />7</h1>
    </div>
    <div className={styles.main3}>
      <h1 className={styles.titlemain3}>
        You<br />
        have<br />
        3<br />
        Requests<br />
      </h1>
    </div>
    <div className={styles.main4}>
      <h1> Your next <br />Training session<br />is in 30m with<br />Kylie
      </h1>
    </div>
  </div>);
}
