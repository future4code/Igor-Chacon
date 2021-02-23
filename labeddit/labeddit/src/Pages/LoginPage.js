import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import { goToCadastroPage, goToFeedPage } from '../Routers/Conductor'

const LoginPage = () => {

    const history = useHistory();

    const CardLogin = styled.h1`
        text-align: center;
    `
    const CardForm = styled.form`
        text-align: center;
    `

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const prevent = (e) => {
        e.preventDefault()
    }

    const login = () => {
        const body = {
            email: email,
            password: password
          };
      
        axios
            .post(
              "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login",
              body
            )
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              alert("Entrando!")
              goToFeedPage(history)
            })
            .catch((err) => {
              console.log(err);
              setEmail('')
              setPassword('');
              alert("Erro no login!")
            })
    }

    const teste = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <h1>
            Bem-vindo!
            <form onSubmit={prevent}>
                <div>
                    E-mail: 
                    <input type="text" required id="email" label="Digite seu E-mail" value={email} onChange={handleEmail} />
                </div>
                <div>
                    Senha:
                    <input type="password" required value={password}  onChange={handlePassword} />
                </div>
                <button onClick={login}>Entrar</button>
            </form>
            
            <button onClick={() => goToCadastroPage(history)}>Cadastrar</button>
        </h1>
    )
}

export default LoginPage