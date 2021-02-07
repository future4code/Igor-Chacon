import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToHomePage, goToTripDetailsPage, goToCreateTripPage} from "../Routes/Coordinator.js"

const AdminPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <h1>AdminPage</h1>
            <button onClick={() => goToHomePage(history)}>Ir para HomePage</button>
            <button onClick={() => goToTripDetailsPage(history)}>Ir para TripDetailsPage (edit)</button>
            <button onClick={() => goToCreateTripPage(history)}>Ir para goToCreateTripPage</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default AdminPage