// import { colors } from "@mui/material";
import { ReactComponent as SearchIcon } from "./SearchIcon.svg"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../Menu';

const ENDPOINT = 'https://qtify-backend-labs.crio.do/';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [topAlbums, setTopAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then((response) => {
      setTopAlbums(response.data);
      setFilteredAlbums(response.data);
    });
  }, []);

  const handleSearch = () => {
    const filteredAlbums = topAlbums.filter((album) =>
      album.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAlbums(filteredAlbums);
    onSearch(filteredAlbums);
  };

  return (
    <div style={{ position: 'relative' }}>
      <form
        style={{
          display: 'flex',
          minWidth: '570px',
        }}
      >
        <input
          placeholder="Search an album of your choice"
          style={{
            flex: 1,
            borderRadius: '8px 0px 0px 8px',
            padding: '8px',
          }}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(); 
          }}
        />
        <button
          style={{
            width: '66px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0px 8px 8px 0px',
            padding: '8px',
          }}
          onClick={handleSearch}
        >
          <SearchIcon width={20} height={20} />
        </button>
      </form>
      {searchTerm.length > 0 && filteredAlbums.length > 0 && (
        <Menu data={filteredAlbums} />
      )}
    </div>
  );
};

export default SearchBox;