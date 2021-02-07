import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {goToHomePage} from "../Routes/Coordinator.js"

const UserLoginPage = () => {
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
              history.push("/UserPage");
            })
            .catch((err) => {
              console.log(err);
            })
    }
    return(
        <div>
            <button onClick={() => goToHomePage(history)}>Ir para HomePage</button>

            <h1>LoginPage (user)</h1>
            
            <div>
                <h2>Login</h2>
                <input value={email} onChange={handleEmail} placeholder="E-mail" />
                <input value={passwold} onChange={handlePasswold} placeholder="passwold" type="password"/>
                <div>
                  <button onClick={login}>Login</button>
                </div>
                
            </div>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default UserLoginPage