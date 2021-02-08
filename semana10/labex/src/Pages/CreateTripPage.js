import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import MenuInnerAdmin from "../components/MenuInnerAdmin.js"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const CreateTripPage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));

    const classes = useStyles();

    const [name, setName] = useState('')
    const [planet, setPlanet] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePlanet = (e) => {
        setPlanet(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleDuration = (e) => {
        setDuration(e.target.value)
    }

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const criarViagem = () => {
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: duration,
          }
      
        axios
            .post(
              "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-chacon-epps/trips",
              body
            )
            .then((res) => {
              alert(`Criada viagem ${res.data.trip.name}`)
            })
            .catch((err) => {
              console.log(err);
            })
    }

    return(
        <div>
            <MenuInnerAdmin />        
            <h1>Criar Viagem</h1>
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={name} id="standard-basic" label="Nome da Viagem" onChange={handleName} />
                    <TextField value={planet} id="standard-basic" label="Planeta da Viagem" onChange={handlePlanet} />
                    <br />
                    <TextField value={date} type="date" id="standard-basic" label=" " onChange={handleDate} />
                    <TextField value={description} id="standard-basic" label="Descrição da Viagem" onChange={handleDescription} />
                    <TextField value={duration} type="number" id="standard-basic" label="Duração da Viagem" onChange={handleDuration} />
                </form>
            </div>
            

            <Button variant="contained" color="primary" onClick={criarViagem}>
                Criar VIagem
            </Button>
            <br />
            <br />
            <Button onClick={goBack} variant="contained" color="primary">
                Voltar
            </Button>            
        </div>
    )
}

export default CreateTripPage