
//__________________________ Stylesheets ______________________________________________
import './App.css'; // currently empty___________________________
import 'react-toastify/dist/ReactToastify.css';
//__________________________ Components ______________________________________________
import Navbar from "./component/Navbar";
import IsAuth from "./component/IsAuth"
//__________________________ Pages ______________________________________________
import Home from './pages/Home';
import Register from "./pages/Register"
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
//__________________________ Package & API ______________________________________________
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { CookieProvider } from './context/userContext';

// ______________ TODO: Adjust Everything for small / medium screen size _____________________________

function App() {
  // const location = useLocation();
  // console.log("location in app", location)
  return <div className='mt-5'>

    <CookieProvider>
      {/* _______________ Navbar ______________________________________ */}
      <Navbar />
      {/* _______________ routes to the pages ______________________________________ */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={
          <IsAuth>
            <Feed />
          </IsAuth>
        } />
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

    </CookieProvider>
  </div>
}

export default App;


