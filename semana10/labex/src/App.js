import './App.css';
import { BrowserRouter , Switch , Route } from "react-router-dom"
import TripDetailsPage from './Pages/TripDetailsPage.js'
import Router from './Pages/Router.js'
import UserLoginPage from './Pages/UserLoginPage.js'
import ListTripsPage from './Pages/ListTripsPage.js'
import HomePage from './Pages/HomePage.js'
import CreateTripPage from './Pages/CreateTripPage.js'
import ApplicationFormPage from './Pages/ApplicationFormPage.js'
import AdminLoginPage from './Pages/AdminLoginPage.js'
import AdminPage from './Pages/AdminPage.js'
import AplicationFormPage  from './Pages/ApplicationFormPage.js'
import UserPage  from './Pages/UserPage.js'


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
          <Route exact path="/UserLoginPage">
            <UserLoginPage />
          </Route>
          <Route exact path="/ListTripsPage">
            <ListTripsPage />
          </Route>
          <Route exact path="/CreateTripPage">
            <CreateTripPage />
          </Route>
          <Route exact path="/ApplicationFormPage">
            <ApplicationFormPage />
          </Route>
          <Route exact path="/AdminLoginPage">
            <AdminLoginPage />
          </Route>
          <Route exact path="/AdminPage">
            <AdminPage />
          </Route>
          <Route exact path="/AplicationFormPage">
            <AplicationFormPage />
          </Route>
          <Route exact path="/UserPage">
            <UserPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
