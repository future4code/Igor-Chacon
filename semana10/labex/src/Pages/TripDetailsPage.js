import React from 'react'
import { useHistory } from 'react-router-dom'
import MenuInnerAdmin from "../components/MenuInnerAdmin.js"

const TripDetailsPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <MenuInnerAdmin />
            <h1>TripDetailsPage</h1>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage