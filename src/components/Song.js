import React from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import YoutubeEmbed from './YoutubeEmbed';

export const Song = ({songs}) => {
    let params = useParams();

    const id = params.id;

    const song = songs.find(x => x.name == id);

    return <div className='container'>
        <YoutubeEmbed embedId = {song.source}/>
        <div>{JSON.parse(song.lyrics)}</div>
    </div>
}

