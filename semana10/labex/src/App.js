import './App.css';
import { BrowserRouter , Switch , Route } from "react-router-dom"
import TripDetailsPage from './Pages/TripDetailsPage.js'
import Router from './Pages/Router.js'
import LoginPage from './Pages/LoginPage.js'
import ListTripsPage from './Pages/ListTripsPage.js'
import HomePage from './Pages/HomePage.js'
import CreateTripPage from './Pages/CreateTripPage.js'
import ApplicationFormPage from './Pages/ApplicationFormPage.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/TripDetailsPage">
            <TripDetailsPage />
          </Route>
          <Route exact path="/LoginPage">
            <LoginPage />
          </Route>
          <Route exact path="/ListTripsPage">
            <ListTripsPage />
          </Route>
          <Route exact path="/CreateTripPage">
            <CreateTripPage />
          </Route>
          <Route exact path="/CreateTripPage">
            <CreateTripPage />
          </Route>
          <Route exact path="/ApplicationFormPage">
            <ApplicationFormPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
