import React, { useState } from 'react';
import styles from './Olympus.module.css'

import { Link, useNavigate } from 'react-router-dom';

export function LoginForm() {
    const [submit, setSubmit] = useState({
        email: "",
        password: ""
    })

    const [showPass, setShowPass] = useState(false)
    const [render, setRender] = useState(false)
    const [notificacao, setNoti] = useState()
    const navigate = useNavigate()

    function handleSubmit(e) {

        e.preventDefault()

        if (!emailError(submit.email) && !passError(submit.password)) {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submit)
            }).then(res => {
                if (res.status == 201) {
                    setNoti("Conta criada com sucesso!")
                }
                return res.json()
            })
                .then(data => {
                    console.log(data)
                    localStorage.setItem("token", data.token)
                    // setTimeout(() => {
                    //         navigate("/profile")
                    //     }, 1000);  
                })
                .catch(error => console.log(error))


            console.log(submit)
            navigate("/dashboard")
        }
        else {
            setRender(true)
        }
    }

    function emailError(email) {
        if (email.length == 0) {
            return (<div className={styles.error}>
                <span>Please input your email adress.</span>
            </div>)
        }
    }

    function passError(pass) {
        if (pass.length == 0) {
            return (
                <div className={styles.error}>
                    <span>Please input your password.</span>
                </div>)
        }
    }

    return (
        <div>

            <form className={styles.form} method="get" onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.login}>
                    <img src="/one1.png" className={styles.logo} alt="Olympus logo" />
                    <h1 className={styles.title}>Login</h1>
                    <div className={styles.field}>
                        <label className={styles.section}>Email</label><br></br>
                        <input className={styles.input} placeholder="someone@example.com" type="text" onChange={(e) => setSubmit((t) => { return { ...t, email: e.target.value.toLowerCase() } })} />
                        {render ? emailError(submit.email) : <div className={styles.error}>????????</div>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.section}>Password</label><br></br>
                        <input className={styles.input} placeholder="A1b2C3d$" type={showPass ? "text" : "password"} onChange={(e) => setSubmit((t) => { return { ...t, password: e.target.value } })} /> <button type="button" className={styles.pwbutton} onClick={() => setShowPass((e) => !e)}>{!showPass ? <span className="material-icons">visibility</span> : <span className="material-icons">visibility_off</span>}</button>
                        {render ? passError(submit.password) : <div className={styles.error}>????????</div>}
                    </div>
                    <div>
                        <button type="submit" className={styles.submit}>Login</button>
                        <div className={styles.sub}>Still don't have an account? Join us <Link to="/signup" className={styles.nodecor}>Click Here</Link>!</div>
                    </div>
                </div>
            </form>
        </div>
    )
}
