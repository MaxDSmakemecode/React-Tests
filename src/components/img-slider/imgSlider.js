import React from 'react'
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'
import './style.css'

class ImgSlider extends React.Component {
    render(){
        return(
            <div>
                <h1>image slider</h1>
                <div className="slider-wrapper">
                    <div className="slider">
                        <figure className="slide" >
                            <img src={slider1} alt="Lion" />
                            <figcaption className="slide-caption">Lion</figcaption>
                        </figure>
                        <figure className="slide" >
                            <img src={slider2} alt="Beaver" />
                            <figcaption className="slide-caption">Beaver</figcaption>
                        </figure>
                        <figure className="slide" >
                            <img src={slider3} alt="Wolf" />
                            <figcaption className="slide-caption">Wolf</figcaption>
                        </figure>
                    </div>
                    <div className="controls">
                        <div className="prev"></div>
                        <div className="next"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImgSlider