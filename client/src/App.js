
import './App.css'; // currently empty___________________________
import Navbar from "./component/Navbar"
import Home from './pages/Home';
import Register from "./pages/Register"
import { Routes, Route } from "react-router-dom";

function App() {
  return <div>

    <Navbar />
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />

    </Routes>

  </div>

}

export default App;
