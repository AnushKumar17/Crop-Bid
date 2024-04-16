import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import Login from './pages/Login';
import Profile from './pages/Profile';
import Buy from './pages/Buy';
import Sell from './pages/Sell';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/buy" element={<Buy/>}/>
        <Route exact path="/sell" element={<Sell/>}/>
        {/* <Route exact path="/" element={}/> */}
      </Routes>
    </Router>
  );
}

export default App;
