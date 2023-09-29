import "./Admin.css"
import NavBar from "./NavBar";
const Admin = () => {
    return (<>

        <div className="myContainer">
            <NavBar />
            <div className="wrapper">
                <h1>👋 Hello Admin</h1>
                <div className="myfooter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,160L1440,288L1440,320L0,320Z"></path></svg>
                </div>
            </div>
        </div>

    </>);
}

export default Admin;