
import { useState, useEffect } from 'react';
//__________________________ Stylesheets ______________________________________________
import './App.css'; // currently empty___________________________
import 'react-toastify/dist/ReactToastify.css';
//__________________________ Components ______________________________________________
import Navbar from "./component/Navbar"
//__________________________ Pages ______________________________________________
import Home from './pages/Home';
import Register from "./pages/Register"
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
import Loading from './pages/Loading';
//__________________________ Package & API ______________________________________________
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { CookieContext } from './context/userContext';
import { getCookie } from "./API/getCookie"


function App() {
  const [cookie, setCookie] = useState("empty");

  useEffect(() => {
    const token = async () => {
      const result = await getCookie()
      setTimeout(()=>{

        setCookie(result.data)
      }, 3000)
      // console.log(result.data, "the respo");
    };
    token();
  }, []);

  return <div className='mt-5'>
    <CookieContext.Provider value={cookie}>

      {/* _______________ Navbar ______________________________________ */}
      {cookie !== "empty" && <Navbar />}
      {/* _______________ routes to the pages ______________________________________ */}
      <Routes>
        <Route path="/register" element={<Register />} />
        {cookie !== "empty" && <Route path="/feed" element={<Feed />} />}
        <Route path="/new" element={<NewPost />} />
        <Route path="/" element={<Home />} />

      </Routes>
      {cookie === "empty" && <Loading/>}
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
