import React from 'react';
import WorksMenu from '../Works/WorksMenu';
import './Software.css';

class Software extends React.Component{
    render(){
        return(
            <div className="main">
            <div className="works-container">
                <WorksMenu />
              <div className="software-item">
                  <div className='software-item-header'>
                      GenBots VR
                  </div>

             </div>
            </div>
          </div>
        )
    }
}

export default Software;