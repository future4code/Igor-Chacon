import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {goToHomePage, goToAdminPage} from "../Routes/Coordinator.js"
import axios from 'axios'

const AdminLoginPage = () => {
    const [email, setEmail] = useState('')
    const [passwold, setPasswold] = useState('')

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswold = (e) => {
        setPasswold(e.target.value);
      }

    const login = () => {
        const body = {
            email: email,
            password: passwold
          };
      
        axios
            .post(
              "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-chacon-epps/login",
              body
            )
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              history.push("/AdminPage");
            })
            .catch((err) => {
              console.log(err);
            })
    }
    
    return(
        <div>
            <h1>AdminLoginPage</h1>

            <div>
                <h2>Login</h2>
                <input value={email} onChange={handleEmail} placeholder="E-mail" />
                <input value={passwold} onChange={handlePasswold} placeholder="passwold" type="password"/>
                <div>
                  <button onClick={login}>Login</button>
                </div>
                
            </div>

            <button onClick={() => goToHomePage(history)}>Ir para HomePage</button>
            <button onClick={() => goToAdminPage(history)}>Ir para AdminPage</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default AdminLoginPage