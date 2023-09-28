import "./App.css";

import Form from "./Form";

function App() {
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
            <Form />
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
