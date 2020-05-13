import React from 'react';
import './DailyDesign.css';
//import MachineBleeds from '../P5Test/MachineBleeds/MachineBleeds';
import P5Hex from '../P5Test/P5hexshader/P5Hex';
class DailyDesign extends React.Component{

    render(){
        return(
            
            // <MachineBleeds width='800' height='400' />
             <P5Hex width='800' height='500'/>
            
          
        )
    }

}

export default DailyDesign;