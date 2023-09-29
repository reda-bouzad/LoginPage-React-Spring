import "./Login.css";
import Form from "./Form";
import { useState } from "react";

const Login = () => {

    const [dataFromChild, setDataFromChild] = useState(null);

    const receiveDataFromChild = (data) => {
        setDataFromChild(data);
        console.log("data" + data)
      };

    return (
        <>
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
                        <Form  sendDataToParent={receiveDataFromChild}/>
                    </div>
                    <div className="footer">
                        <p>
                            Already a member? <span> Sign in</span>
                        </p>
                    </div>
                </div>
            </div>
            <h1>role : {dataFromChild}</h1>
        </>
    );
}

export default Login;