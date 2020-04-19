import React, { Component } from 'react';


class Searchbar extends Component {

    state={
   
        term:'',
    }
    
    InputChange = zin =>{
        console.log(zin.target.value);
        this.setState({term:zin.target.value});
    }
    formSubmit = event =>{
        event.preventDefault();
       this.props.onSubmit(this.state.term);
    }
      
  
    render() {
        return (
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container">
            <div className="navbar-brand mr-auto" >Music Player</div>
              <form className="form-inline my-2 my-lg-0"  onSubmit={this.formSubmit} >
                <input className="form-control mr-sm-2" type="search" value={this.state.term} onChange={this.InputChange} placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </div>
          </nav>
          

        )
    }
}

export default Searchbar;
