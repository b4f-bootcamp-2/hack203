import React, { useEffect, useState } from 'react';
import styles from './Olympus.module.css'
import { useNavigate } from 'react-router-dom';

export const Formulario = (props) => {

    let token = props.token
    const [submit, setSubmit] = useState({
        name: "",
        age: "",
        weight: "",
        height: "",
        sex: "masculino",
        lifestyle: "moderado",
        clima: "temperado"
    })

    const navigate = useNavigate()
    const [render, setRender] = useState(false)

    useEffect(() => {
        checkProfile()

    }, []);

    function checkProfile() {
        fetch('/api/checkProfile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        }).then(res => {
            if (res.status === 404) {
                return
            }
            return res.json()
        })
            .then(data => {
                if (!data) return
                else setSubmit(data)
                return data
            })
            .catch(error => console.log(error))
    }

    function handleSubmit(e) {

        e.preventDefault()

        if (!nameError(submit.name) && !ageError(submit.age) && !weightError(submit.weight) && !heightError(submit.height)) {
            fetch('/api/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify(submit)
            }).then(res => {
                if (res.status === 200) {
                    navigate("/dashboard")
                }
                return
            })
                .catch(error => console.log(error))
        }
        else {
            setRender(true)
        }
    }

    function nameError(name) {
        if (name.length === 0) {
            return (<div className={styles.error}>
                <span>Please input your name.</span>
            </div>)
        }
    }
    function ageError(age) {
        if (age.length === 0) {
            return (<div className={styles.error}>
                <span>Please input your age.</span>
            </div>)
        }

        else if (isNaN(age)) {
            return ((<div className={styles.error}>
                <span>Please input a valid age.</span>
            </div>))
        }

        else if (Number(age) < 0) {
            return (<div className={styles.error}>
                <span>Please input a valid age.</span>
            </div>)
        }

        else if (Number(age) > 130) {
            return (<div className={styles.error}>
                <span>Please input a valid age.</span>
            </div>)
        }
    }
    function weightError(weight) {
        if (weight.length === 0) {
            return (<div className={styles.error}>
                <span>Please input your weight.</span>
            </div>)
        }

        else if (isNaN(weight)) {
            return ((<div className={styles.error}>
                <span>Please input a valid weight.</span>
            </div>))
        }

        else if (Number(weight) < 0) {
            return (<div className={styles.error}>
                <span>Please input a valid weight.</span>
            </div>)
        }

        else if (Number(weight) > 600) {
            return (<div className={styles.error}>
                <span>Please input a valid weight.</span>
            </div>)
        }
    }
    function heightError(height) {
        if (height.length === 0) {
            return (<div className={styles.error}>
                <span>Please input your height.</span>
            </div>)
        }

        else if (isNaN(height)) {
            return ((<div className={styles.error}>
                <span>Please input a valid height.</span>
            </div>))
        }

        else if (Number(height) < 0) {
            return (<div className={styles.error}>
                <span>Please input a valid height.</span>
            </div>)
        }

        else if (Number(height) > 300) {
            return (<div className={styles.error}>
                <span>Please input a valid height.</span>
            </div>)
        }
    }

    return (

        <form className={styles.form} method="get" onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.mains}>
                <h1 className={styles.title}>Profile</h1>
                <div className={styles.desc}>Please input every data so we can offer the best experience.</div>

                <div className={styles.field}>
                    <label className={styles.section}>Name</label><br></br>
                    <input
                        placeholder="Insira o seu nome"
                        className={styles.input}
                        type="text"
                        value={submit.name}
                        // required
                        onChange={(e) => setSubmit((t) => { return { ...t, name: e.target.value } })}
                    />
                    {render ? nameError(submit.name) : <div className={styles.error}>󠀡󠀡</div>}
                </div>
                <div className={styles.field}>
                    <label className={styles.section}>Age</label><br></br>
                    <input
                        placeholder="Please input your age"
                        className={styles.input}
                        type="number"
                        value={submit.age}
                        // required
                        onChange={(e) => setSubmit((t) => { return { ...t, age: e.target.value } })}
                    />
                    {render ? ageError(submit.age) : <div className={styles.error}>󠀡󠀡</div>}
                </div>

                <div className={styles.field}>
                    <label className={styles.section}>Weight (kg)</label><br></br>
                    <input
                        placeholder="Please input a weight"
                        className={styles.input}
                        type="number"
                        value={submit.weight}
                        // required
                        onChange={(e) => setSubmit((t) => { return { ...t, weight: e.target.value } })}
                    />
                    {render ? weightError(submit.weight) : <div className={styles.error}>󠀡󠀡</div>}
                </div>

                <div className={styles.field}>
                    <label className={styles.section}>Height (cm)</label><br></br>
                    <input
                        placeholder="Please input a height"
                        className={styles.input}
                        type="number"
                        value={submit.height}
                        // required
                        onChange={(e) => setSubmit((t) => { return { ...t, height: e.target.value } })}
                    />
                    {render ? heightError(submit.height) : <div className={styles.error}>󠀡󠀡</div>}
                </div>

                <div className={styles.field}>
                    <label className={styles.section}>Gender</label><br></br>
                    <select className={styles.options} value={submit.sex} onChange={(e) => setSubmit((t) => { return { ...t, sex: e.target.value } })}>
                        <option value="man" >Man</option>
                        <option value='woman'>Woman</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.section}>Lifestyle</label><br></br>
                    <select className={styles.options} value={submit.lifestyle} onChange={(e) => setSubmit((t) => { return { ...t, lifestyle: e.target.value } })}>
                        <option value="Sedentary" >Sedentary</option>
                        <option value='Moderate' >Moderate</option>
                        <option value='Active' >Active</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.section}>Climate</label><br></br>
                    <select value={submit.clima} className={styles.options} onChange={(e) => setSubmit((t) => { return { ...t, clima: e.target.value } })}>
                        <option value="cold" >Cold Climate</option>
                        <option value='temperate'>Temperate Climate</option>
                        <option value='hot'>Hot Climate</option>
                    </select>
                </div>

                <button type='submit' className={styles.submit}>Save</button>
            </div>
        </form>
    )
}

export default Formulario