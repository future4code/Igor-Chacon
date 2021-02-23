import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import { goToLoginPage } from '../Routers/Conductor'

const CadastroPage = () => {

    const history = useHistory();

    const CardLogin = styled.h1`
        text-align: center;
  `
    const CardForm = styled.form`
        text-align: center;
    `

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [usuario, setUsuario] = useState('')

    const handleUsuario = (e) => {
        setUsuario(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const prevent = (e) => {
        e.preventDefault()
    }

    const cadastrar = () => {
        const body = {
            email: email,
            password: password,
            username: usuario
          };
      
        axios
            .post(
              "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
              body
            )
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              alert("Cadastro feito!")
              setEmail('')
              setPassword('');
            })
            .catch((err) => {
              console.log(err.message);
              setEmail('')
              setPassword('');
              alert("Erro no cadastro!")
            })
    }

    return (
        <h1>
            Cadastre seu usuário!
            <form onSubmit={prevent}>
                <div>
                    Nome de usuário: 
                    <input type="text" required id="user" label="Digite seu Usuário" value={usuario} onChange={handleUsuario} />
                </div>
                <div>
                    E-mail: 
                    <input type="text" required id="email" label="Digite seu E-mail" value={email} onChange={handleEmail} />
                </div>
                <div>
                    Senha:
                    <input type="password" required value={password}  onChange={handlePassword} />
                </div>
                <button onClick={cadastrar}>Cadastrar</button>
            </form>
            <button onClick={() => goToLoginPage(history)}>Ir para Login</button>
        </h1>
    )
}

export default CadastroPage