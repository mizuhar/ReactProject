import { Routes, Route } from "react-router-dom";
import BoxerDetails from "./components/BoxerDetails/BoxerDetails";
import BoxerList from "./components/BoxerList/BoxerList";
import BoxerUpdate from "./components/BoxerUpdate/BoxerUpdate";
import { AuthProvider } from "./components/contexts/TodoContexts";
import CreateBoxer from "./components/CreateBoxer/CreateBoxer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";

import Path from "./path";




function App() {

  return (
    <>
    <AuthProvider>

      <Header></Header>

          <Routes>
            <Route path={Path.Home} element={<Home />}></Route>
            <Route path="/boxers" element={<BoxerList />}></Route>
            <Route path="/boxers/:boxerId" element={<BoxerDetails />}></Route>
            <Route path="/boxers/create" element={<CreateBoxer />}></Route>
            <Route path={Path.BoxerUpdate} element={<BoxerUpdate/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path={Path.Logout} element={<Logout />}></Route>
          </Routes>
     </AuthProvider>    
     </>
  )
}

export default App
