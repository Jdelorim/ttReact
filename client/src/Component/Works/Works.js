import React from 'react';
import WorksMenu from './WorksMenu';
import './Works.css';



class Works extends React.Component {

    render(){
        return (
       
          <div className="main">
            <div className="works-container">
              <WorksMenu />
            <div className="works">
                <p>
                Joshua deLorimier has a undertaken a wide range of projects throughout his career with his main focus on live visuals.   
                </p>
            </div>
            </div>
          </div>
        
        );
    }
}

export default Works;