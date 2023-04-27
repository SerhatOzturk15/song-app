import React from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import YoutubeEmbed from './YoutubeEmbed';

export const Song = ({songs}) => {
    let params = useParams();

    const id = params.id;

    const song = songs[id];

    return <div className='container'>
        <YoutubeEmbed embedId = {song.source}/>
        <div>{song.lyrics}</div>
        <div>{song.chords}</div>
    </div>
}

