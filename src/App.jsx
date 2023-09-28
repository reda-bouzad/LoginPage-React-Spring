import { useState } from "react";
import "./App.css";
import "@mui/material/Alert";
import Alert from "@mui/material/Alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State for controlling the alert visibility

  const notifyError = () =>
    toast.error("Wrong email or password", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifySuccess = () =>
    toast.success("Success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const submitForm = (e) => {
    console.log(email + password);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch("http://localhost:8082/api/v1/auth/authenticate", requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.error("403 Forbidden: You are not authorized");
          setShowAlert(true);
          notifyError();
        } else {
          notifySuccess();
        } 
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
      <div className="container">
        <div className="square1"></div>
        <div className="square2">
          <div className="intro">
            <h1>Sign up</h1>
            <p>
              Welcome to WoodMart <br /> Register as a member to experience.{" "}
            </p>
          </div>
          <div className="myForm">
            <label htmlFor="Email">E-mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
            />
            <label htmlFor="Password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
            <div className="checkBox">
              <input className="myCheckBox" type="checkbox" />
              <label htmlFor="">I agree the terms of service</label>
            </div>
            <input
              onClick={submitForm}
              className="myBtn"
              value="Create account"
              type="submit"
            />
          </div>
          <div className="footer">
            <p>
              Already a member? <span> Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
