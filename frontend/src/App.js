import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import Formulario from './components/UserData';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import Clients from './components/Clients';
import Calendario from './components/calendar';
import LineChart from './components/chart';

function App() {

  const [login, setLogin] = useState(false)

  function tokenFromLocal() {
    const token = localStorage.getItem("token")
    return token;
  }

  function checkAuth(token) {
    fetch('/user', {
      method: 'GET',
      headers: {
        'Authorization': `${token}`
      },
    }).then(res => {
      if (res.status == 200) {
        setLogin(true)
        return
      }
      else if (res.status == 403) {
        setLogin(false)
        return
      }
    })
      .catch(error => console.log(error))
  }

  const userToken = tokenFromLocal()


  useEffect(() => {
    checkAuth(userToken)
    setInterval(() => {
      const userToken = tokenFromLocal()
      checkAuth(userToken)
    }, 2424);

  }, []);




  return (
    <BrowserRouter>
      <div>

      </div>

      <Routes>
        <Route exact path="/" element={login ? <Dashboard token={userToken} /> : <LoginForm />} />
        <Route path="/signup" element={login ? <Dashboard token={userToken} /> : <SignupForm />} />
        <Route path="/login" element={login ? <Dashboard token={userToken} /> : <LoginForm />} />
        <Route path="/profile" element={login ? <Formulario token={userToken} /> : <LoginForm />} />
        <Route path="/dashboard" element={login ? <Dashboard token={userToken} /> : <LoginForm />} />
        <Route path="/account" element={login ? <Account token={userToken} /> : <LoginForm />} />
        <Route path="/calender" element={login ? <Calendario token={userToken} /> : <LoginForm />} />
        <Route path="/clients" element={login ? <Clients token={userToken} /> : <LoginForm />} />
        <Route path="/stats" element={login ? <LineChart token={userToken} /> : <LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;