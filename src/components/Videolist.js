import React, { Component } from "react";
import Videoitem from "./Videoitem";


class Videolist extends Component{

    renderItem = () =>{
      return this.props.video.map((item , index)=>{

            return <Videoitem video={item} key={index} />
        });
    }

    render(){

        return(
            <div>
               {this.renderItem()}
            </div>
        );


    }
}

export default Videolist;