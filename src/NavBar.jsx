import "./NavBar.css"
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CallIcon from '@mui/icons-material/Call';
const NavBar = () => {
    return ( <>
    <div className="navbar">
        <div className="logo">
            Woodmart
        </div>
        <div className="links">
            <ul>
                <li>Collections</li>
                <li>Product</li>
                <li>Brand</li>
                <li>Community</li>
                <li>Fresh Sale</li>
            </ul>
        </div>
        <div className="icons">
        <SearchIcon className="myIcone" sx={{ color: "white"}}/>
        <PermContactCalendarIcon className="myIcone" sx={{ color: "white"}}/>
        <CallIcon className="myIcone" sx={{ color: "white"}}/>
        
        </div>
    </div>
    </> );
}
 
export default NavBar;