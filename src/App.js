import React, { Component } from 'react';
import Serachbar from './components/Searchbar';
import './App.css';
import youtube,{baseParam} from './api/youtube';
import Videolist from './components/Videolist';

class App extends Component {
  state={video:[]};

  formSubmit = async value =>{
  
    const response = await youtube.get('/search',{
      params:{
        ...baseParam,
        q:value
      }
    });
    this.setState({
      video:response.data.items,
    });
  };

  render(){
    const { video } = this.state;
    return (
      <div className="App">
        <Serachbar onSubmit={this.formSubmit} />
        <div className="row" >
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <Videolist video={video} />
            </div>
        </div>
      </div>
    );
  }
  
}

export default App;
