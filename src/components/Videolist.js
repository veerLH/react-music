import React from "react";
import Videoitem from "./Videoitem";

const Videolist = ({video,onSelectVideo}) => {
    
    
    const renderItem = () =>{
        return video.map((item , index)=>{
  
              return <Videoitem video={item} key={index} onSelectVideo={onSelectVideo}/>
          });
      };
 
          return(
              <div>
                 {renderItem()}
              </div>
          );
}

export default Videolist;