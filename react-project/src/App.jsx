import { Routes, Route } from "react-router-dom";
import BoxerDetails from "./components/BoxerDetails/BoxerDetails";
import BoxerList from "./components/BoxerList/BoxerList";
import BoxerUpdate from "./components/BoxerUpdate/BoxerUpdate";
import { AuthProvider } from "./components/contexts/TodoContexts";
import CreateBoxer from "./components/CreateBoxer/CreateBoxer";
import RoutGuard from "./components/guard/RoutGuard";
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
            <Route path={Path.BoxerList} element={<BoxerList />}></Route>
            <Route path={Path.BoxerDetails} element={<BoxerDetails />}></Route>
            <Route path={Path.BoxerUpdate} element={<BoxerUpdate/>}></Route>
            <Route path={Path.Login} element={<Login />}></Route>
            <Route path={Path.Register} element={<Register />}></Route>
            <Route path={Path.Logout} element={<Logout />}></Route>
              <Route element={<RoutGuard />}>
                    
                    <Route path={Path.CreateBoxer} element={<CreateBoxer />}></Route>
                  
                </Route>
          </Routes>
     </AuthProvider>    
     </>
  )
}

export default App
