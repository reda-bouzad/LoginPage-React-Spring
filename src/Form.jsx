import { useState } from "react";
import { notifyError, notifySuccess } from "./Toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Form = () => {

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
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
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
    </>
  );
}

export default Form;