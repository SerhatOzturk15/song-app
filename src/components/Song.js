import React from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import YoutubeEmbed from './YoutubeEmbed';

export const Song = ({songs}) => {
    let params = useParams();

    const id = params.id;

    const song = songs.find(x => x.name == id);

    //const song = songs.filter(x => x.name = match.params.id)

    const container = {
        display: 'flex',
        flex: '1',
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        whiteSpace: "break-spaces",
        paddingLeft: '3rem',
      };

    return <div style = {container}>
        <YoutubeEmbed embedId = {song.source}/>
        <div>{JSON.parse(song.lyrics)}</div>
    </div>
}

