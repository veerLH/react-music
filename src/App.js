import React, { Component } from 'react';
import Serachbar from './components/Searchbar';
import VideoDetail from './components/VideoDetail';
import './App.css';
import youtube,{baseParam} from './api/youtube';
import Videolist from './components/Videolist';

class App extends Component {
  state={
    video:[],
    onSelectVideo:null
  };

  formSubmit = async value =>{
  
    const response = await youtube.get('/search',{
      params:{
        ...baseParam,
        q:value
      }
    });
    this.setState({
      video:response.data.items,
      onSelectVideo:response.data.items[0]
    });
  };

  onSelectVideo = video => {
    this.setState({
      onSelectVideo:video,
    });
  };

  render(){
    const { video ,onSelectVideo } = this.state;
    return (
      <div className="App">
        <Serachbar onSubmit={this.formSubmit} />
        <div className="row" >
            <div className="col-md-6">
              <VideoDetail video={onSelectVideo}/>
            </div>
            <div className="col-md-6">
              <Videolist video={video} onSelectVideo={this.onSelectVideo}/>
            </div>
        </div>
      </div>
    );
  }
  
}

export default App;
