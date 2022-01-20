import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
    return (
        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        { rightBtnText &&  
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
            
            <DownArrow src="/images/down-arrow.svg" alt="down-arrow"/>
            </Buttons>
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-image: url(/images/model-s.jpg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")` }
`
const ItemText = styled.div`
    z-index: -1;
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.button`
    height: 40px;
    width: 256px;
    background-color: rgba(23, 26, 32, 0.8);
    color: #fff;
    font-size: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        opacity: 1;
    }
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    height: 40px;
    animation: animationDown infinite 1.5s;
    overflow-x: hidden;
`
const Buttons = styled.div`

`