
import { useState, useEffect } from 'react';
import './App.css'; // currently empty___________________________
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./component/Navbar"
import Home from './pages/Home';
import Register from "./pages/Register"
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { CookieContext } from './context/userContext';
import { getCookie } from "./API/getCookie"


function App() {
  const [cookie, setCookie] = useState(null);

  useEffect(() => {
    const token = async () => {
      const result = await getCookie();
      setCookie(result.data)
      console.log(result.data, "the respo");
    }
    token();
  },[]);

  return <div className='mt-5'>
    <CookieContext.Provider value={cookie}>

      {/* _______________ Navbar ______________________________________ */}
      <Navbar />
      {/* _______________ routes to the pages ______________________________________ */}
      <Routes>
        <Route path="/register" element={<Register />} />
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
    </CookieContext.Provider>
  </div>

}

export default App;
