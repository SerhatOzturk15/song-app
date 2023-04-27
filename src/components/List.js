import React, { useEffect, useState } from 'react';
//import songs from '../../src/songs.json'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './../index.css'


export const List = ({ songs }) => {
  let navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/song/${index}`);
  }

  return <div className='outer'>
     <div className='title'>
        <div>Song</div>
        <div>Artist</div>
    </div> 
    {songs.map((x, i) => {
      return <div onClick={() => handleClick(i)}>
        <div>{x.name}</div>
        <div>{x.singer}</div>
      </div>
    })}
  </div>
}
