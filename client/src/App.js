
import './App.css'; // currently empty___________________________
import Navbar from "./component/Navbar"
import Home from './pages/Home';
import Register from "./pages/Register"
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <div className='mt-5'>

    <Navbar />
    <Routes>
      <Route path="/register" element={<Register />} />  {/* _________add show & hide Pw _________*/}
      <Route path="/feed" element={<Feed />} />
      <Route path="/new" element={<NewPost />} />
      <Route path="/" element={<Home />} />

    </Routes>

  {/* _______________ toastify pop up______________________________________ */}
  <ToastContainer
            position="top-center"
            autoClose={7500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            // theme='dark'
        />
  </div>

}

export default App;
