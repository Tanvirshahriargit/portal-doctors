import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Services from './pages/Shared/Services/Services';
import Appointment from './pages/Appointment/Appointment/Appointment';
import LogIn from './pages/LogIn/LogIn/LogIn';
import Register from './pages/LogIn/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivetRoute from './pages/LogIn/PrivetRoute/PrivetRoute';
import Dashboard from './pages/Deshboard/Deshboard/Deshboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/services">
          <Services></Services>
          </Route>
          <Route path="/login">
          <LogIn></LogIn>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <PrivetRoute path="/appointment">
          <Appointment></Appointment>
          </PrivetRoute>
          <PrivetRoute path="/dashboard">
          <Dashboard></Dashboard>
          </PrivetRoute>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
