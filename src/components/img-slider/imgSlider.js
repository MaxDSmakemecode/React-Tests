import React from 'react'
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'
import './style.css'

// slider logic
    /* 
    1. get all the slide elements and save them in a variable
    2. set a counter outside of the sliding animation function so the active class has a reference
    3. write a for loop to set every slide to 'display: none' everytime the slider gets updated via setTimeout
    4. in the loop the counter has to be incremented
    5. when the sliding animation is at the end the counter has to return to zero 
    6. to start the whole slider animation there has to be another setTimeout outside of the sliding animation function
    */

class ImgSlider extends React.Component {
    constructor(props){
        super(props)

        this.addActive = this.addActive.bind(this)
        this.addIndefiniteNumbers = this.addIndefiniteNumbers.bind(this)
    }

    addActive(){
        const slideInterval = 3000
        const slides = document.querySelectorAll('.slide')
        let counter = 0

        function slider(){
            for(let i = 0; i < slides.length; i++){
                slides[i].classList.remove('slide-animation')
            }
            if(counter >= slides.length){
                counter = 0
            }
            counter++
            slides[counter - 1].classList.add('slide-animation')
            
            setTimeout(slider, slideInterval)
        }
        
        setTimeout(slider, slideInterval)
    }

    addIndefiniteNumbers(){
        console.log(arguments)
    }

    render(){
        return(
            <div>
                <h1>image slider</h1>
                <div className="slider-wrapper">
                    <div className="slider">
                        <figure className="slide" id="1">
                            <img src={slider1} alt="Lion" />
                            <figcaption className="slide-caption">Lion</figcaption>
                        </figure>
                        <figure className="slide" id="2">
                            <img src={slider2} alt="Beaver" />
                            <figcaption className="slide-caption">Beaver</figcaption>
                        </figure>
                        <figure className="slide" id="3">
                            <img src={slider3} alt="Wolf" />
                            <figcaption className="slide-caption">Wolf</figcaption>
                        </figure>
                    </div>
                    <div className="controls">
                        <div className="prev" onClick={this.addActive}></div>
                        <div className="next" onClick={() => this.addIndefiniteNumbers(1, 2, 3, 'string')}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImgSlider