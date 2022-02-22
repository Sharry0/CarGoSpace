
import './App.css'; // currently empty___________________________
import Navbar from "./component/Navbar"
import Home from './pages/Home';
import Register from "./pages/Register"
import Feed from './pages/Feed';
import { Routes, Route } from "react-router-dom";

function App() {
  return <div className='mt-5'>

    <Navbar />
    <Routes>
      <Route path="/register" element={<Register />} />  {/* _________add show & hide Pw _________*/}
      <Route path="/feed" element={<Feed />} />
      <Route path="/" element={<Home />} />

    </Routes>

  </div>

}

export default App;
