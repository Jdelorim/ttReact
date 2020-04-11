import React from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";


class FmSynth1 extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    Sketch = p => {
        p.setup = () =>{
            p.size(windowWidth, 200, P2D);
        }

        p.draw = () => {
            p.background(0);
        }
    }


}

export default FmSynth1;