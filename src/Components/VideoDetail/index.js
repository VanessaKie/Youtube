import React from 'react';
import { css } from "@emotion/core";
import { CircleLoader} from "react-spinners";

const VideoDetail = (props) => {

    return(          
        <>
        {props.loading ? <div className="loader"> <CircleLoader
 css={css} size={150} color={"#AFDCF1"} loading={props.loading} /> </div> : <div className='col-7 player p-2'> <iframe className="text-center p-2" id="vid" width="640" height="360" src= {`http://www.youtube.com/embed/${props.iFrame}?autoplay=1`} frameborder="0" allowFullScreen allow="autoplay"/>
            <h4 className='p-3 text-left'>{props.playTitle}</h4>
            <p className="p-3 text-left">{props.playDescription}</p>
           </div>}
        </>
      
    )
}

export default VideoDetail;

