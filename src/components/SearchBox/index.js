import { colors } from "@mui/material";
import { ReactComponent as SearchIcon } from "./SearchIcon.svg"
import Menu from "../Menu"

const SearchBox = () => {
    return (
    <div style={{
        position:'relative'
    }}>
            <form style={{
            display: 'flex',
            minWidth: '570px'
        }}>
            <input
            placeholder="Search a album of your choice"
            style={{
                flex: 1,
                borderRadius: '8px 0px 0px 8px',
                padding: '8px'
            }}
            />
            <button style={{
                width:'66px',
                height:'48px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '0px 8px 8px 0px',
                padding: '8px'
            }}>
                <SearchIcon width={20} height={20} />
            </button>
        </form>
        <Menu data={[1,2,3,4,5,6]}/>    
    </div>)
}

export default SearchBox;