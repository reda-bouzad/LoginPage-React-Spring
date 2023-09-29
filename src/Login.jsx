import "./Login.css";
import Form from "./Form";
import { useState, useEffect } from "react";
import { useRole } from "./RoleContext";

const Login = ({  }) => {
  const sendDataToParentComponent = () => {
    // Call the function passed from the parent component
  };
  const { role, setRole } = useRole();
    useEffect(() => {
        // Code to run whenever the value of 'role' changes
        console.log('Role has changed:', role);
        sendDataToParentComponent();
    
        // You can perform any other actions based on the new 'role' value here
    
        // Don't forget to cleanup if needed
        return () => {
          // Code to run when the component is unmounted or when 'role' changes
          // This acts like componentWillUnmount in class components
        };
      }, [role]); 
    const receiveDataFromChild = (data) => {
        setRole(data);
        console.log("data" + data)
      };

    return (
        <>
            <div className="container">
                <div className="square1"></div>
                <div className="square2">
                    <div className="intro">
                        <h1>Sign in</h1>
                        <p>
                            Welcome to WoodMart <br /> Register as a member to experience.{" "}
                        </p>
                    </div>
                    <div className="myForm">
                        <Form  sendDataToParent={receiveDataFromChild}/>
                    </div>
                    <div className="footer">
                        <p>
                            Dont have an account ?  <span className="marked"> Sign up</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;