import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToHomePage, goToAplicationFormPage, goToListTripsPage, goToUserPage} from "../Routes/Coordinator.js"

const AplicationFormPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            
            <button onClick={() => goToHomePage(history)}>Ir para HomePage</button>
            <button onClick={() => goToUserPage(history)}>Ir para UserPage</button>
            <button onClick={() => goToListTripsPage(history)}>Ir para ListTripsPage</button>

            <h1>AplicationFormPage</h1>
            
            <button onClick={goBack}>Voltar</button>
            
        </div>
    )
}

export default AplicationFormPage