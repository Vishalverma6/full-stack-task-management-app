import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/common/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Menu from './Pages/Menu';
import { useSelector } from 'react-redux';
import Cart from './components/core/cart/index';
import toast from 'react-hot-toast';
import Order from './Pages/Order';
import PrivateRoute from './components/core/auth/PrivateRoute';

function App() {

  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.user)
  console.log("user",user)
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar/>
      <Routes>
        
         <Route path='/' element ={<Home/>}/>

         <Route
          path='/login' element={<Login/>}
         />
         <Route
          path='/signup' element={<Signup/>}
         />
         <Route
          path='/menu' element={<Menu/>}
         />

         <Route
          path='/cart' element={<Cart/>}
         />

         {
          user &&(
            <>
              <Route path='/order' element={<Order/>}/>
            </>
          )
         }
         <Route
           path='/order'
           element ={<Order/>}
         />

         
          
         

             

      </Routes>
    </div>
  );
}

export default App;
