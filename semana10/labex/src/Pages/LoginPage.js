import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToHomePage} from "../Routes/Coordinator.js"

const LoginPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <h1>LoginPage</h1>
            <button onClick={() => goToHomePage(history)}>Ir para HomePage</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default LoginPage