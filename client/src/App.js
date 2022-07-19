
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
import About from './pages/About';
import Policies from './pages/Policies';
//__________________________ Package & API ______________________________________________
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { CookieProvider } from './context/userContext';


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
        <Route path="/about" element={<About />} />
        <Route path="/policies" element={<Policies />} />

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


