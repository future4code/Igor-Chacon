import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'
import styled from "styled-components"
import Fab from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const ImagemPerfil = styled.img`
    align-text: center;
    max-width: 250px;
    max-height: 250px;
`
const Texto = styled.p`
    align-text: center;
    margin: 0;
    padding: 0 25% 0 25%;
`

export default function CardProfile () {

    

    const [perfil, setPerfil] = useState({})

    const pegarPerfil = () => {
        const res = axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor-chacon/person"
        )
        .then(res => setPerfil(res.data.profile))
        .catch(err => console.log(err))
    }

    const darMatch = (id) => {
        axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor-chacon/choose-person",
            {
                "id": id,
                "choice": "true"
            }
        )
        .then(alert(`Dado match!`))
        .catch(err => alert(err))
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
                {perfil.name}, {perfil.age}
                <br />
                {perfil.bio}
                <br />
            </Texto>
            <br />
            <br />

            <Fab
                onClick={() => darMatch(perfil.id)}
                color="primary" 
                aria-label="like"
            >
                <FavoriteIcon />
            </Fab>
            <Fab>
                <ThumbDownIcon onClick={pegarPerfil}/>
            </Fab>
        </div>
    )
}