import React from 'react'
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'
import './style.css'
import styled, { keyframes } from "styled-components"

// styled component styles for ImgSlider:
const SliderWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
`

const Slider = styled.div`
    position: relative;
    width: 100%;
`

const SingleSlide = styled.figure`
    display: none; 
`

const sliding = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`

const SlideActive = styled.figure`
    display: block;
    position: absolute;
    animation: ${sliding} 500ms;
`

const sliderText = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`

const SlideCaption = styled.figcaption`
    position: absolute;
    bottom: 0;
    left: 0;
    color: #ffffff;
    font-size: 5rem;
    width: 100%;
    padding: 1rem 5%;
    background: rgba(0,0,0,0.7);
    opacity: 0;
    animation: ${sliderText} 500ms linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
`
const Controls = styled.div `
    width: 70%;
    margin: 0 auto;
    padding: 1rem 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
`
const Next = styled.div`
    position: relative;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgb(18, 85, 255);
    color: #ffffff;

    &:before {
        content: '>';
        position: absolute;
        top: 0.2rem;
        left: 0.7rem;
        cursor: pointer;
    }
`

const Prev = styled(Next)`
    &:before {
        content: '<';
    }
`

// slider logic
    /* 
    1. get all the slide elements and save them in a variable
    2. set a counter outside of the sliding animation function so the active class has a reference
    3. write a for loop to set every slide to 'display: none' everytime the slider gets updated via setTimeout
    4. in the loop the counter has to be incremented
    5. when the sliding animation is at the end the counter has to return to zero 
    6. to start the whole slider animation there has to be another setTimeout outside of the sliding animation function
    */

const slideInterval = 1000
const slides = document.getElementsByTagName('figure')
let counter = 0

function sliderAnimation(){
    for(let i = 0; i < slides.length; i++){
        slides[i].setAttribute('display', 'none')
        counter++
    }
    if(counter >= slides.length){
        counter = 0;
    }
    // slides[counter - 1].classList.add()

    setTimeout(sliderAnimation, slideInterval)
}

setTimeout(sliderAnimation, slideInterval)

class ImgSlider extends React.Component {
    render(){
        return(
            <div>
                <h1>image slider</h1>
                <SliderWrapper>
                    <Slider>
                        <SingleSlide>
                            <img src={slider1} alt="Lion" />
                            <SlideCaption>Lion</SlideCaption>
                        </SingleSlide>
                        <SingleSlide>
                            <img src={slider2} alt="Beaver" />
                            <SlideCaption>Beaver</SlideCaption>
                        </SingleSlide>
                        <SingleSlide>
                            <img src={slider3} alt="Wolf" />
                            <SlideCaption>Wolf</SlideCaption>
                        </SingleSlide>
                    </Slider>
                    <Controls>
                        <Prev onClick={this.clickLog}></Prev>
                        <Next></Next>
                    </Controls>
                </SliderWrapper>
            </div>
        )
    }
}

export default ImgSlider