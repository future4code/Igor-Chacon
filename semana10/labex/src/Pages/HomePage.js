import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToUserLoginPage, goToAdmLoginPage} from "../Routes/Coordinator.js"

const HomePage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <button onClick={() => goToUserLoginPage(history)}>Ir para UserLoginPage</button>
            <button onClick={() => goToAdmLoginPage(history)}>Ir para goToAdmLoginPage</button>
            <h1>
            HomePage
            </h1>
            
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default HomePage