import { useContext, useState } from "react";
import { notifyError, notifySuccess } from "./Toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import jwt_decode from 'jwt-decode';

const Form = ({ sendDataToParent }) => {
  let token;
  let role ;
  const navigate = useNavigate();
  const [dataToSend, setDataToSend] = useState('');
  const sendDataToParentComponent = () => {
    // Call the function passed from the parent component
    sendDataToParent(role);
  };
  const submitForm = () => {
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
          notifyError();
        } else {
          notifySuccess();
          // navigate("/admin");
        }
        return response.json();
      })
      .then((data) => {
        token = data.token;
        let decoded = jwt_decode(token);
        console.log(decoded);
        if (decoded.role == "[ROLE_USER]"){
          role = "User";
        } else if (decoded.role == "[ROLE_ADMIN]"){
          role == "Admin";
        }
        console.log(decoded.role)
        console.log("the role of the is " + role)
        sendDataToParentComponent();
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <ToastContainer />
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
      <button onClick={sendDataToParentComponent}>Click me</button>
    </>
  );
}

export default Form;