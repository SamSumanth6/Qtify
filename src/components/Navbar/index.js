import Button from "../Button"
import SearchBox from "../SearchBox"
import "./Navbar.css"

const Navbar = () => {
    const handleSearch = (filteredAlbums) => {
        console.log("Filtered Albums:", filteredAlbums);
    };
    return (
        <div className="navbar">
            <img src="logo.png" width={67} height={34}/>
            <SearchBox onSearch={handleSearch}/>
            <Button>Give Feedback</Button>
        </div>
    )
}

export default Navbar;