import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToTripDetailsPage, goToCreateTripPage} from "../Routes/Coordinator.js";
import MenuInnerAdmin from '../components/MenuInnerAdmin.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const AdminPage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));

    const classes = useStyles();

    const history = useHistory()

    return(
        <div>
            <MenuInnerAdmin />
            <br />
            <br />
            <div className={classes.root}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={() => goToTripDetailsPage(history)}>Visualizar/Editar <br /> Viagem</Button>
                    <Button onClick={() => goToCreateTripPage(history)}>Criar Viagem</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default AdminPage