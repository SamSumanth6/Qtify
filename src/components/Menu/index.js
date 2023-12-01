import React from 'react';

const MenuItem = ({ album }) => (
  <div
    style={{
      display: 'flex',
      height: '120px',
      width: '100%',
    //   border: '2px solid blue',
    borderBottom:'1px solid gray'
    }}
  >
    <div
      style={{
        width: '120px',
        height: '100%',
        // border: '2px solid yellow',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={album.image} 
        alt={album.name}
        style={{ maxWidth: '100%', maxHeight: '100%', width:'100%', height:'100%', padding:'6px' }}
      />
    </div>

    <div
      style={{
        flex: '1',
        // border: '2px solid orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        padding: '8px',
        
      }}
    >
      <p>{album.title}</p>
      <p style={{ fontSize: '8px' }}>{album.description}</p>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '120px',
        height: '100%',
        // border: '2px solid yellow',
        color: 'white',
        padding: '8px',
      }}
    >
      100 follows
    </div>
    
  </div>
);

const Menu = ({ data }) => (
  <div
    style={{
      position: 'absolute',
      width: '570px',
      maxHeight: '500px',
    //   border: '5px solid red',
      overflowY: 'auto',
      top: '60px',
      backgroundColor: 'black',
    }}
  >
    {data.map((album, index) => (
      <MenuItem key={index} album={album} />
    ))}
  </div>
);

export default Menu;