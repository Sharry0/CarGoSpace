
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
  // const [someState, setSomeState] = useState(false)

  useEffect(() => {
    const token = async () => {
      //____________ doing it wrong, check react router dom redirect for auth/proteced paths __________
      await getCookie()
        .then((response) => {
          if (response.data.email) {
            setCookie(response.data)
          } else {
            setCookie("register")
          };
        });
    };
    token();
  }, []);

  return <div className='mt-5'>
    {/* <button onClick={()=>{setSomeState(true)}}>some buttong</button> */}
    <CookieContext.Provider value={cookie}>

      {/* _______________ Navbar ______________________________________ */}
      {cookie !== "empty" && <Navbar />}
      {/* _______________ routes to the pages ______________________________________ */}
      <Routes>
        <Route path="/register" element={<Register />} />
        {(cookie !== "empty" || cookie !== "register") && <Route path="/feed" element={<Feed />} />}
        <Route path="/new" element={<NewPost />} />
        <Route path="/" element={<Home />} />

      </Routes>
      {cookie === "empty" && <Loading />}

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
