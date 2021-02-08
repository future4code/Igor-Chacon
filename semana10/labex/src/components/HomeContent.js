import React from 'react'
import styled from 'styled-components'
import fogueteFofo from '../images/foguetefofo.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import saturno from '../images/saturno.png';
import foguete2 from '../images/foguete.jpg';
import netuno from '../images/netuno.jpg';
import venus from '../images/venus.jpg';
import marte from '../images/marte.jpg';
import mercurio from '../images/mercurio.jpg';
import jupter from '../images/jupter.jpg';
import urano from '../images/urano.jpg';
import lua from '../images/lua.jpg';
import plutao from '../images/plutao.jpg'

const ContainerContent = styled.div`
    display: grid;
    grid-template-areas:
    'header header header header header header header'
    'sideMenu1 main main main main main sideMenu2'
    'footer footer footer footer footer footer footer';
    grid-gap: 10px;
    margin: 0;
    padding: 2%;
    .header { 
        grid-area: header; 
    }
    .sideMenu1 { 
        padding: 5%;
        grid-area: sideMenu1; 
        border: solid 2px #C0C0C0;
        border-radius: 25px;
    }
    .main { 
        grid-area: main;
        border: solid 2px #C0C0C0;
        padding: 5%;
        border-radius: 25px;
    }
    .sideMenu2 { 
        padding-top: 5%;
        grid-area: sideMenu2; 
        border: solid 2px #C0C0C0;
        border-radius: 25px;
    }
`
const ImagemSideMenu = styled.img`
    max-width: 25%;
`

const ImagemPrincipal = styled.img`
    width: 75%;
    height: 75%;
`

const HomeContent = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));

      const classes = useStyles();

      function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ImagemPrincipal src={saturno} />
                <p>Venha conhecer os aneis de Saturno!</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ImagemPrincipal src={netuno} />
                <p>Venha conhecer o mundo azul Netuno!</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ImagemPrincipal src={venus} />
                <p>Venha conhecer Venus, o mais perto do Sol!</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ImagemPrincipal src={marte} />
                <p>Venha conhecer Marte e descobrir se tem vida lá!</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ImagemPrincipal src={mercurio} />
                <p>Venha conhecer Mercurio! Aqui chove diamente!</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ImagemPrincipal src={jupter} />
                <p>Venha conhecer Jupiter!</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ImagemPrincipal src={urano} />
                <p>Venha conhecer Urano!</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ImagemPrincipal src={lua} />
                <p>Venha conhecer a Lua!</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ImagemPrincipal src={plutao} />
                <p>Venha conhecer Plutão! (Não é mais planeta, mas ainda podemos ir lá!)</p>
              </Paper>
            </Grid>
          </React.Fragment>
        );
      }
    

    return(
        <div>
            <ContainerContent>
                <h1 className="header">Bem vindo a LebeX</h1>

                <div className="sideMenu1">
                    <ImagemSideMenu src={fogueteFofo} />
                    <p>Viage conosco!</p>
                    <p>Venha conecer nossos planos de viagem para outros planetas!</p>
                    <p>Faça login e se candidate para uma das viagens ao lado! </p>     
                </div>

                <div className={classes.root} className="main">
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>
                            <FormRow />
                            </Grid>
                        </Grid>
                </div>
                
                <div className="sideMenu2">
                    <ImagemSideMenu src={foguete2} />
                    <p>Anuncie aqui e decole com sua empresa!</p>
                </div>
            </ContainerContent>
            
        </div>
    )
}

export default HomeContent