import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Section from './components/Section';

const ENDPOINT = 'https://qtify-backend-labs.crio.do/'

function App() {

  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])

  useEffect(()=>{
    axios.get(`${ENDPOINT}albums/top`)
    .then( (response) =>{
      setTopAlbums(response.data)
    })
    axios.get(`${ENDPOINT}albums/new`)
    .then((response) =>{
      setNewAlbums(response.data)
    })
  },[])



  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Section title='Top Albums' data={topAlbums}/>
        <Section title='New Albums' data={newAlbums}/>
    </div>
  );
}

export default App;
