import Button from "../Button"
import SearchBox from "../SearchBox"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="logo.png" width={67} height={34}/>
            <SearchBox />
            <Button>Give Feedback</Button>
        </div>
    )
}

export default Navbar;