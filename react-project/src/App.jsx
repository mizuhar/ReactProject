import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/contexts/TodoContexts";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Path from "./path";




function App() {

  return (
    <>
    <AuthProvider>

      {/* <Header></Header> */}

      <Routes>
        <Route path={Path.Home} element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
     </AuthProvider>    
     </>
  )
}

export default App
