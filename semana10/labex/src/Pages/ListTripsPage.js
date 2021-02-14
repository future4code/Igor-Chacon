import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToHomePage, goToAplicationFormPage, goToUserPage} from "../Routes/Coordinator.js"

const ListTripsPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return(
        <div>            
            <button onClick={() => goToHomePage(history)}>HomePage</button>
            <button onClick={() => goToAplicationFormPage(history)}>AplicationFormPage</button>
            <button onClick={() => goToUserPage(history)}>UserPage</button>

            <h1>ListTripsPage</h1>

            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default ListTripsPage