import React, { useEffect, useState } from 'react';
//import songs from '../../src/songs.json'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './../index.css'


export const List = ({ songs }) => {
  let navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/song/${name}`);
  }

  return <div className='outer'>
     <div className='title'>
        <div>Song</div>
        <div>Artist</div>
    </div> 
    {songs.map(x => {
      return <div onClick={() => handleClick(x.name)}>
        <div>{x.name}</div>
        <div>{x.singer}</div>
      </div>
    })}
  </div>
}
