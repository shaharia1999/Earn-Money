// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './compunent/Footer/Footer';
import Home from './compunent/Home/Home';
import Navbar from './compunent/Navber/Navber';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer></Footer>

   
    </div>
  );
}

export default App;
