import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './Componant/Pages/About';
import Home from './Componant/Pages/Home';
import Header from './Componant/Header/Header';
import Login from './Componant/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Componant/Register/Register';

function App() {
  return (
 <div >
  <AuthProvider>
  <Router>
    <Header></Header>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </Router>
  </AuthProvider>
</div>
  );
}

export default App;
