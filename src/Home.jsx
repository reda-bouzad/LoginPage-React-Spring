import "./Admin.css"
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
const Home = () => {
    const [role, setRole] = useState(localStorage.getItem('role'));

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        if (storedRole !== role) {
            setRole(storedRole);
        }
    }, []); 


    return (<>

        <div className="myContainer">
            <NavBar />
            <div className="wrapper">
                <h1>👋 Hello {role}</h1>
                <div className="myfooter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,160L1440,288L1440,320L0,320Z"></path></svg>
                </div>
            </div>
        </div>

    </>);
}

export default Home;