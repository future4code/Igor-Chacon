import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'
import styled from "styled-components"

const ImagemPerfil = styled.img`
    align-text: center;
    max-width: 150px;
    max-height: 150px;
`

export default function MatchesList () {

    const [matches, setMetches] = useState([])

    const pegarMatches = () => {
        axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor-chacon/matches"
        )
        .then(res => setMetches(res.data.matches))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        pegarMatches()
    }, [])

    useEffect(() => {
        pegarMatches()
    }, [matches])

    const renderMatches = matches.map((match) => {
        return <div> <ImagemPerfil src={match.photo}></ImagemPerfil> <div>{match.name}</div> <hr />  </div>
    })

    return (
        <div>
            Lista de Matches
            <hr />
            <br />
            <br />
            {renderMatches}
        </div>
    )
}