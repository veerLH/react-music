import React, { Component } from "react";


class Videoitem extends Component{


    render(){
        const { video} = this.props;

        if (!video) {
           return <div> Loading...... </div>
        }

        return(
            <React.Fragment>
                <img src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width={video.snippet.thumbnails.medium.width}
                height={video.snippet.thumbnails.medium.height}
                />
                <div style={{margin:"20px"}}>
                {video.snippet.title}
                </div>
            </React.Fragment>
        );


    }
}

export default Videoitem;