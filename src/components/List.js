import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
//import songs from '../../src/songs.json'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const List = ({ songs }) => {
  let navigate = useNavigate();

  const [status, setStatus] = useState();

  const outerShit = {
    backgroundColor: "DodgerBlue",
    fontFamily: "Arial",
  };

  const colStyle = {
    backgroundColor: "DodgerBlue",
    fontFamily: "Arial"
  };

  const gridStyle = {
    display: 'grid',
    paddingLeft: '100px',
    rowGap: '1rem',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr'
  };

  const handleClick = (name) => {
    navigate(`/song/${name}`);
  }

  return <div style = {outerShit}>
    {songs.map(x => {
      return <div style={gridStyle} onClick={() => handleClick(x.name)}>
        <div style={colStyle}>{x.name}</div>
        <div style={colStyle}>{x.source}</div>
        <div style={colStyle}>{x.official_video}</div>
        <div style={colStyle}>{x.tabs}</div>
      </div>
    })}
  </div>
}

/*
*/