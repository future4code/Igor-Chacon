import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import CadastroPage from "../Pages/CadastroPage";
import FeedPage from "../Pages/FeedPage";
import DetalhesPostPage from "../Pages/DetalhesPostPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />

                <Route exact path="/cadastro" component={CadastroPage} />

                <Route exact path="/feed" component={FeedPage} />

                <Route 
                    exact 
                    path="/detalhes/:id" 
                    component={DetalhesPostPage}
                />

                <Route>
                    <div>Error 404 - Descupe, mas esta página não existe :(</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;