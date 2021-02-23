import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginPage from "../Pages/LoginPage"
import CadastroPage from "../Pages/CadastroPage"
import FeedPage from "../Pages/FeedPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />

                <Route exact path="/cadastro" component={CadastroPage} />

                <Route exact path="/feed" component={FeedPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router