
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
import Post from './pages/Post';
//__________________________ Package & API ______________________________________________
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { CookieProvider } from './context/userContext';

// ______________ TODO: Adjust Everything for small / medium screen size _____________________________
// ______________ TODO: Loading page kinda annyoing __________________________________________________
// ______________ TODO: limit feed to 20 post, scroll to bottom to load more _________________________
// ______________ TODO: limit post height for to long text, hide overflow & "read more" btn __________
// ______________ TODO: if logged in, restrict access to /register ___________________________________
// ______________ TODO: add /post/:id route __________________________________________________________
// ______________ TODO: left footer card (about, poilcy,...), sticky top _____________________________
// ______________ TODO: Profil editing page __________________________________________________________
// ______________ TODO: Add creation date to posts ___________________________________________________
// ______________ TODO: Edit button only for users own post visible __________________________________
// ______________ TODO: wrapping isAuth around almost every path, looks stupid _______________________
// ______________ TODO: add like, comment, edit functions ____________________________________________
// ______________ TODO: "RangeError: Maximum call stack size exceeded" on first comments under posts _
// ______________ TODO: comment submit with empty input error handler ________________________________
// ______________ TODO: api calls add async/await clean up ___________________________________________
// ______________ TODO: api in hook umwandeln ________________________________________________________
// ______________ TODO: clean up code, APIs everywhere _______________________________________________

function App() {
  return <div className='mt-5'>

    <CookieProvider>
      {/* _______________ Navbar ______________________________________ */}
      <Navbar />
      {/* _______________ routes to the pages ______________________________________ */}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<IsAuth> <Feed /> </IsAuth>} />
        <Route path="/new" element={<IsAuth> <NewPost /> </IsAuth>} />
        <Route path="/post/:id" element={<IsAuth> <Post /> </IsAuth>} />

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


