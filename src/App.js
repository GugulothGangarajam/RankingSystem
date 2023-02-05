import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import Login from './pages/Login';
import AddUsers from './pages/AddUsers'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './pages/Navbar';
import Users from './pages/users';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<AddUsers/>} />
          <Route path='/ranklist'element={<Users/>}/>
          {/* <Route path='/navbar' element={<Navbar/>}/> */}

        </Routes>
      </BrowserRouter >
    </div>

  );
}

export default App;
