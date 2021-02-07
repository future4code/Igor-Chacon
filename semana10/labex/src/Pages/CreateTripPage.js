import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToHomePage, goToTripDetailsPage, goToAdminPage} from "../Routes/Coordinator.js"

const CreateTripPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <button onClick={() => goToHomePage(history)}>Ir para HomePage</button>
            <button onClick={() => goToTripDetailsPage(history)}>Ir para TripDetailsPage (edit)</button>
            <button onClick={() => goToAdminPage(history)}>Ir para goToAdminPage</button>
        
            <h1>CreateTripPage</h1>

            <button onClick={goBack}>Voltar</button>
            
        </div>
    )
}

export default CreateTripPage