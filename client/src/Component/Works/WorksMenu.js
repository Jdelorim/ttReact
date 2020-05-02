import React from 'react';
import { Link } from 'react-router-dom';
class WorksMenu extends React.Component {
    render(){
        return(
            <div className="works-header">
                <Link to='/visuals'>
                    <div>Visuals</div>
                </Link>
                <Link to='/software'>
                    <div>Software</div>
                </Link>
                <Link to='/installations'>
                    <div>Installations</div>
                </Link>
                <Link to='/film'>
                    <div>Film</div>
                </Link>
           </div>
        )
    }
}

export default WorksMenu;