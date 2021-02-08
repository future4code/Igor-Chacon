import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {goToUserLoginPage, goToAdmLoginPage} from "../Routes/Coordinator.js"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {goToHomePage} from "../Routes/Coordinator.js";
import rocketIcon1 from '../images/rocket-icon-1.jpg'

const IconeImagem = styled.img`
    max-width: 4%;
    max-height: 4%;
    
`

const MenuInnerUser = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

    const classes = useStyles();

    const history = useHistory()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconeImagem onClick={() => goToHomePage(history)} src={rocketIcon1} /> 
                    <Typography variant="h6" className={classes.title}>
                        Usuário LabeX
                    </Typography>
                    <Button color="inherit" onClick={() => goToAdmLoginPage(history)}>Admin</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MenuInnerUser;