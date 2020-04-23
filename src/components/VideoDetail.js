import React, { Component } from 'react';

class VideoDetail extends Component{

    render(){

        console.log(this.props);

        if (!this.props.video) {
            return "Loading.....";
        }

        const videoUrl=`https://www.youtube.com/embed/${this.props.video.id.videoId}`

        return(
            <div>
                <iframe src={videoUrl} width="100%" height="500" title={this.props.video.snippet.title} allow="autoplay"/>
            </div>
        );
    }

}

export default VideoDetail;