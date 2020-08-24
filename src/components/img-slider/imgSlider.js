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
    padding-bottom: 65.3%;
`

const Slide = styled.figure`
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

const SlideAnimation = styled.figure`
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

class ImgSlider extends React.Component {
    render(){
        return(
            <div>
                <h1>image slider</h1>
                <SliderWrapper>
                    <Slider>
                        <Slide>
                            <img src={slider1} alt="Lion" />
                            <SlideCaption>Lion</SlideCaption>
                        </Slide>
                        <Slide>
                            <img src={slider2} alt="Beaver" />
                            <SlideCaption>Beaver</SlideCaption>
                        </Slide>
                        <Slide>
                            <img src={slider3} alt="Wolf" />
                            <SlideCaption>Wolf</SlideCaption>
                        </Slide>
                    </Slider>
                    <Controls>
                        <Prev></Prev>
                        <Next></Next>
                    </Controls>
                </SliderWrapper>
            </div>
        )
    }
}

export default ImgSlider