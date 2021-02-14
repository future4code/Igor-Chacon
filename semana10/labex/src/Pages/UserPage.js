import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToHomePage, goToAplicationFormPage, goToListTripsPage} from "../Routes/Coordinator.js"

const UserPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <h1>UserPage</h1>
            <button onClick={() => goToHomePage(history)}>HomePage</button>
            <button onClick={() => goToAplicationFormPage(history)}>AplicationFormPage</button>
            <button onClick={() => goToListTripsPage(history)}>ListTripsPage</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default UserPage