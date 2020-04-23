import React from "react";


const Videoitem = ({ video ,onSelectVideo}) =>{
 

    if (!video) {
       return <div> Loading...... </div>
    }

    return(
        <div onClick={()=> onSelectVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            width={video.snippet.thumbnails.medium.width}
            height={video.snippet.thumbnails.medium.height}
            />
            <div style={{margin:"20px"}}>
            {video.snippet.title}
            </div>
        </div>
    );


}
export default Videoitem;