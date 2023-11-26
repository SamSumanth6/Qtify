import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import FilterSection from './components/FilterSection';

const ENDPOINT = 'https://qtify-backend-labs.crio.do/'

function App() {

  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [genres, setGenres] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])

  useEffect(()=>{
    axios.get(`${ENDPOINT}albums/top`)
    .then( (response) =>{
      setTopAlbums(response.data)
    })
    axios.get(`${ENDPOINT}albums/new`)
    .then((response) =>{
      setNewAlbums(response.data)
    })
    axios.get(`${ENDPOINT}songs`)
    .then((response) =>{
      setSongs(response.data)
      setFilteredSongs(response.data)
    })
    axios.get(`${ENDPOINT}genres`)
    .then((response) =>{
      setGenres([{"key":"all","label":"All"},...response.data.data])
    })
  },[])



  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Section title='Top Albums' data={topAlbums}/>
        <Section title='New Albums' data={newAlbums}/>
        <FilterSection title='Songs' data={filteredSongs} filters={genres} executeFilter={(genre)=> {
            if(genre === "all"){
              setFilteredSongs(songs)
            }else{
              setFilteredSongs(songs.filter(song => song.genre.key === genre))
            }
        }}/>
    </div>
  );
}

export default App;
