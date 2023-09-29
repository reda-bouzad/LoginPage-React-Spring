import "./Admin.css"
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import admin from "./assets/admin.jpeg"
import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import { green } from "@mui/material/colors";
import car from "./assets/car.jpg"
import watch from "./assets/watch.png"


const Home = () => {
    const [role, setRole] = useState(localStorage.getItem('role'));
    const [email, setEmail] = useState(localStorage.getItem('email'));
    let isAdmin;
    let isUser;

    if (role == "Admin") {
        isAdmin = true;
    }

    if (role == "User") {
        isUser = true;
    }

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        if (storedRole !== role) {
            setRole(storedRole);
        }
    }, []);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail !== email) {
            setRole(storedEmail);
        }
    }, []);


    return (<>

        <div className="myContainer">
            <NavBar />
            {isAdmin && <div className="wrapper">
                < div className="box">
                    <div className="box1">
                        <div className="card">
                            <div className="image-container">
                                <img width="170" src={admin} alt="" srcset="" />
                            </div>
                            <div className="email">
                                <h3>{email}</h3>
                                <h3>Based in Marrakech, Morocco</h3>
                                <p> <CopyrightIcon /> 2023, All Rights Reserved</p>
                            </div>
                            <div className="icons">
                                <div className="myIconeAdmin">
                                    <TwitterIcon />
                                </div>
                                <div className="myIconeAdmin">
                                    <GitHubIcon />
                                </div>
                                <div className="myIconeAdmin">
                                    <FacebookIcon />
                                </div>
                                <div className="myIconeAdmin">
                                    <InstagramIcon />
                                </div>
                            </div>
                            <div className="myButton">
                                <button className="my-button"><PhoneIcon /> Call</button>
                            </div>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="header-container">
                            <h1>👋 Hello <span style={{ color: '#6EE793' }}> {role} </span>, today Tasks </h1>                    </div>
                            <div className="task">
                                <input type="checkbox" name="checkbox"  className="checkbox"id="checkbox" />
                                <label htmlFor="">Meeting with product owner</label>
                            </div>
                            <div className="task">
                                <input type="checkbox" name="checkbox"  className="checkbox"id="checkbox" />
                                <label htmlFor="">Stock Inventory</label>
                            </div>
                            <div className="task">
                                <input type="checkbox" name="checkbox"  className="checkbox"id="checkbox" />
                                <label htmlFor="">Buy Supplies for office</label>
                            </div>
                            <div className="task">
                                <input type="checkbox" name="checkbox"  className="checkbox"id="checkbox" />
                                <label htmlFor="">Call Human Resources</label>
                            </div>
                            <div className="task">
                                <input type="checkbox" name="checkbox"  className="checkbox"id="checkbox" />
                                <label htmlFor="">Meeting with product owner</label>
                            </div>
                    </div>
                </div>
                {/* <div className="myfooter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,160L1440,288L1440,320L0,320Z"></path></svg>
                </div> */}
            </div>}
            {isUser && <div className="forUser">
                <div className="userContainer1">
                    <h1 class="bigFuckingHeader">Take Advantage of WoodMart <span style={{ color: "#6EE793" }}> like a pro</span></h1>
                </div>
                <div className="userContainer2">
                    <img width="500" src={watch} alt="" />
                </div>
            </div>}
        </div>

    </>);
}

export default Home;