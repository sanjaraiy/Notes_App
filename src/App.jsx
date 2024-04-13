import Home from "./pages/home/Home"
import { Route,Routes } from "react-router-dom"
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
function App() {
  

  return (
    <>
       <Routes>
          <Route path="/dashboard" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
       </Routes>
    </>
  )
}

export default App
