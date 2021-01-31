import React from 'react';
import "./VideosRow.css";

function VideosRow( {image, title, channel, views, timestamp, description, subs}) {
    return (
        <div className="videosRow">
            <img className="videosRow__thumbnail" alt={channel} src={image}></img>
            <div className="videosRow__text">
                <h3>{title}</h3>
                <p className="videosRow__headline">{channel} • <span className="videosRow__subs"><span  className="videosRow__subsNumber">{subs}</span> Subscribers</span> • {views} Views • {timestamp}</p>
                <p className="videosRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideosRow
