import Home from "./pages/home/Home"
import { Navigate, Route,Routes } from "react-router-dom"
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
function App() {
  

  return (
    <div>
       <Routes>
          <Route path="/" element={<Navigate to='/dashboard'></Navigate>}></Route>
          <Route path="/dashboard" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
       </Routes>
    </div>
  )
}

export default App
