import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {goToHomePage, goToAdminPage} from "../Routes/Coordinator.js"
import MenuInnerAdmin from '../components/MenuInnerAdmin.js'
import axios from 'axios'
import MenuInnerUser from '../components/MenuInnerUser.js';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const AdminLoginPage = () => {

    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              My Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    const [email, setEmail] = useState('')
    const [passwold, setPasswold] = useState('')

    const history = useHistory()

    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));

      const classes = useStyles();

    const goBack = () => {
        history.goBack()
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswold = (e) => {
        setPasswold(e.target.value);
      }

    const login = () => {
        const body = {
            email: email,
            password: passwold
          };
      
        axios
            .post(
              "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-chacon-epps/login",
              body
            )
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              history.push("/AdminPage");
            })
            .catch((err) => {
              console.log(err);
            })
    }
    
    return(
        <div>
            <MenuInnerAdmin />
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email} 
                    onChange={handleEmail}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={passwold} 
                    onChange={handlePasswold}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button    
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={login}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            </Container>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default AdminLoginPage