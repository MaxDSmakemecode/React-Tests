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

// const slideInterval = 1000
// const slides = document.querySelectorAll('.slide')
// let counter = 0

// function sliderAnimation(){
//     for(let i = 0; i < slides.length; i++){
//         slides[i].setAttribute('display', 'none')
//         counter++
//     }
//     if(counter >= slides.length){
//         counter = 0;
//     }
//     slides[counter - 1].classList.add('slide-animation')

//     setTimeout(sliderAnimation, slideInterval)
// }

// setTimeout(sliderAnimation, slideInterval)

class ImgSlider extends React.Component {
    constructor(props){
        super(props)

        this.addActive = this.addActive.bind(this)
    }

    addActive(e){
        const slideInterval = 1000
        const slides = document.querySelectorAll('.slide')
        let counter = 0

        function slider(){
            for(let i = 0; i < slides.length; i++){
                slides[i].setAttribute('display', 'none')
                counter++
                // console.log(slides[i])
            }
            if(counter >= slides.length){
                counter = 0
            }
            setTimeout(slider, slideInterval)
        }
        
        setTimeout(slider, slideInterval)
    }

    render(){
        return(
            <div>
                <h1>image slider</h1>
                <div className="slider-wrapper">
                    <div className="slider">
                        <figure className="slide">
                            <img src={slider1} alt="Lion" />
                            <figcaption className="slide-caption">Lion</figcaption>
                        </figure>
                        <figure className="slide">
                            <img src={slider2} alt="Beaver" />
                            <figcaption className="slide-caption">Beaver</figcaption>
                        </figure>
                        <figure className="slide">
                            <img src={slider3} alt="Wolf" />
                            <figcaption className="slide-caption">Wolf</figcaption>
                        </figure>
                    </div>
                    <div className="controls">
                        <div className="prev" onClick={this.addActive}></div>
                        <div className="next"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImgSlider