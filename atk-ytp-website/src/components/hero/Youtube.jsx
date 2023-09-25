import React from "react";
import './Counter.scss';

const EMBED_ID = 'hgZ-FrfIFG4?si=H6NJr62mRobvDZdm'

const YoutubeEmbed = () => (
    <div className="shadow relative overflow-hidden pb-[56.25%] h-0" id="traileri">
        <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${EMBED_ID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="absolute inset-0 h-full w-full"
        />
    </div>  
);

export default YoutubeEmbed;