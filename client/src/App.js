
//__________________________ Stylesheets ______________________________________________
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
// ______________ TODO: left footer card (about, poilcy,...), sticky top _____________________________
// ______________ TODO: Profil editing page __________________________________________________________
// ______________ TODO: Add creation date to posts ___________________________________________________
// ______________ TODO: wrapping isAuth around almost every path, looks stupid _______________________
// ______________ TODO: comment submit with empty input error handler ________________________________
// ______________ TODO: api calls add async/await clean up / optional chaning ________________________
// ______________ TODO: api in hook umwandeln ________________________________________________________
// ______________ TODO: clean up code, APIs everywhere, console.log() ________________________________
// ______________ TODO: Darkmode / lightmode _________________________________________________________
// ______________ TODO: show current user profile img and name on create post page ___________________
// ______________ TODO: move delete icon on comment all the way to the right _________________________

function App() {
  return <div>

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


