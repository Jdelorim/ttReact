import React from 'react';
import './Works.css';
import {Link} from 'react-router-dom';

class Works extends React.Component {

    render(){
        return (
          <div className="main">
            <div className="works-container">
              <div className="works-header">
                  <Link to='/works/visuals'>
                    <div>Visuals</div>
                  </Link>
                  <Link to='/works/software'>
                    <div>Software</div>
                  </Link>
                 <Link to='/works/installations'>
                    <div>Installations</div>
                 </Link>
                 <Link to='/works/film'>
                    <div>Film</div>
                 </Link>
              </div>
              <div className="works">

              </div>
            </div>
          </div>
        );
    }
}

export default Works;