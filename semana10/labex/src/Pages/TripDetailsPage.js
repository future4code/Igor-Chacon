import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToHomePage, goToCreateTripPage} from "../Routes/Coordinator.js"

const TripDetailsPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <h1>TripDetailsPage</h1>
            <button onClick={() => goToHomePage(history)}>Ir para HomePage</button>
            <button onClick={() => goToCreateTripPage(history)}>Ir para CreateTripPage</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage