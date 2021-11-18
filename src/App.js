import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Services from './pages/Shared/Services/Services';
import Appointment from './pages/Appointment/Appointment/Appointment';
import LogIn from './pages/LogIn/LogIn/LogIn';
import Register from './pages/LogIn/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivetRoute from './pages/LogIn/PrivetRoute/PrivetRoute';
import Dashboard from './pages/Deshboard/Deshboard/Deshboard';
import DashBoardHome from './pages/Deshboard/DashBoardHome/DashBoardHome';
import Payment from './pages/Deshboard/Payment/Payment';
import AdminRoute from './pages/LogIn/AdminRoute/AdminRoute';
import MakeAdmin from './pages/Deshboard/MakeAdmin/MakeAdmin';
import AddDoctor from './pages/Deshboard/AddDoctor/AddDoctor';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element= {<Home></Home>}>
          </Route>
          <Route path="/services" element= {<Services></Services>}>
          </Route>
          <Route path="/login" element={<LogIn></LogIn>}>    
          </Route>
          <Route path="/register" element= {<Register></Register>}>
          </Route>
            <Route path="/appointment" element={<PrivetRoute>
              <Appointment></Appointment>
            </PrivetRoute>}>
          </Route>
            <Route path="/dashboard" element={<PrivetRoute>
              <Dashboard></Dashboard>
            </PrivetRoute>}>
            <Route exact path="/dashboard" element={<DashBoardHome></DashBoardHome>}>
                    </Route>
                    <Route  path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>                
                    </Route>
                    <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}>
                    </Route>
                    <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor></AddDoctor></AdminRoute>}>
                    </Route>
          </Route>
            <Route exact path="/" element={<Home></Home>}>     
          </Route>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
