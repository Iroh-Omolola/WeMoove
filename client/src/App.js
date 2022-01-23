import './App.css';
import {Navigate, useRoutes} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import AddCar from './pages/AddCar'
import AdminHome from './pages/AdminHome'
import BookingCar from './pages/BookingCar'
import EditCar from './pages/EditCar'
import UserBookings from './pages/UserBookings'
import Home from './pages/Home'
import 'antd/dist/antd.min.css';
import About from './pages/About'


const App = () => {
  const user =localStorage.getItem('user') 
  const routes = useRoutes([
    { path: "/cars",  element: user ? <Home/> : <Navigate to="/login" />,},
    { path: "/",  element: <About/>},
    { path: "login", element: <Login/>},
    { path: "register", element: <Register/>},
    { path: "/booking/:carid",  element: user ? <BookingCar/> : <Navigate to="/login" />,},
    { path: "/userbookings",  element: user ? <UserBookings/> : <Navigate to="/login" />,},
    { path: "/addcar",  element: user ? <AddCar/> : <Navigate to="/login" />,},
    { path: "/editcar/:carid",  element: user ? <EditCar/> : <Navigate to="/login" />,},
    { path: "/admin",  element: user ? <AdminHome/> : <Navigate to="/login" />,},
  ]);

  
  return routes
};

 


export default App;



