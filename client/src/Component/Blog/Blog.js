import React from 'react';
import './Blog.css';
class Blog extends React.Component {

    render(){
        return(
            <div className='main-can'>
                <div className='main'>
                    <div className='bio-container'>
                        <div className='bio-header'>
                            BLOG
                        </div>
                        <div className='blog'>
                            <div className='blog-header'>
                                4.29.20 - 
                            </div>
                            <div className='blog-entry'>
                                <p>
                                My new website is complete! In the next month my main priority is to finish GenBotsVR. 
                                An Occulus Go game that I had developed in the beginning of 2017 for google cardboard. 
                                I also want to continue building my new real time visuals system using a combination of P5.js and THREE.js as well as some GLSL shaders. 
                                I will be updating this site frequently with my progress working on GenBotsVR in May. Stay tuned....  
                                </p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
          
        )
    }
}

export default Blog;