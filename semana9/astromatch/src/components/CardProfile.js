import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'
import styled from "styled-components"

const ImagemPerfil = styled.img`
    align-text: center;
    max-width: 250px;
    max-height: 250px;
`
const Texto = styled.p`
    color: green;
    align-text: center;
    margin: 0;
    padding: 0 25% 0 25%;
`
export default function CardProfile () {

    const [perfil, setPerfil] = useState({})

    const pegarPerfil = () => {
        const res = axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person"
        )
        .then(res => setPerfil(res.data.profile))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        pegarPerfil()
    }, [])

    return (
        <div>
            <ImagemPerfil src={perfil.photo} />
            <br />            
            <br />
            <Texto>
                {perfil.name}
                <br />
                {perfil.age}
                <br />
                {perfil.bio}
            </Texto>
            
        </div>
    )
}