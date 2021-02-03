import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToLoginPage} from "../Routes/Coordinator.js"

const HomePage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <h1>
            HomePage
            </h1>
            <button onClick={() => goToLoginPage(history)}>Ir para LoginPage</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default HomePage