import React from 'react';



const VideoList = (props) => {
    let list = props.display.map(el => <VideoItem key={el.vidId} vidId={el.vidId} title={el.title} description={el.description} thumbnail={el.thumbnail}  getVideoDisplay={props.getVideoDisplay} /> )
    
    return(
        <div className='list col-4 ml-3'>
            {list}
        </div>
    )                             

    }

    

const VideoItem = (props) => {
    const {vidId, title, description, thumbnail} = props;

    return(
        <div onClick={() => props.getVideoDisplay(vidId, title, description)} className="m-2 p-1 listitem">
            <img className='item p-2' src={thumbnail} />
            <h6>{title}</h6>
        </div>
    )

}

export default VideoList;

