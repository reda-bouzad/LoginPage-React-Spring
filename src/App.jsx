import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import "./Login.css"
import { RoleProvider, useRole } from "./RoleContext";


function App() {
  //  const [role, setRole] = useRole();


    
 

  return (
    <>
    {/* <h1>Role: {role}</h1> */}
    
      <Router>
        <RoleProvider>
        <Routes>
          <Route  path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        </RoleProvider>
      </Router>
    </>
  );
}

export default App;
