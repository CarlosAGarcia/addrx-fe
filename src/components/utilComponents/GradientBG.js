import React, { useState } from 'react'
import styled from 'styled-components'

// simple gradient background parent component wrapper that covers background with a linear gradient with swirling animation
// todo: customAnimation support 
const StyledGradientBG = styled.div`
    ${({customBackgroundGradient}) => customBackgroundGradient ? `
        background: ${customBackgroundGradient};
    ` : `
        background: radial-gradient(#EBF0C2, #268991, #21353C, #222723);
    `}
    background-size: 500% 500%;
    ${({ isAnimationDisabled }) => !isAnimationDisabled &&
        `
            animation: gradient 120s ease infinite;
        `
    };
    
    height: 100%;
    width: 100%;

    @keyframes gradient {
        0% {
		    background-position: 0% 0%;
        }
        8% {
            background-position: 10% 10%;
        }
        12.5% {
            background-position: 13% 25%;
        }
        16% {
            background-position: 10% 40%;
        }
        25% {
            background-position: 0% 100%;
        }
        35% {
            background-position: 20% 100%;
        }
        50% {
            background-position: 100% 100%;
        }
        75% {
            background-position: 100% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }  
`

export default function GradientBG(props) {
    const { customBackgroundGradient, isAnimationDisabled = false, customAnimation } = props

    return (
        <StyledGradientBG customBackgroundGradient={customBackgroundGradient} isAnimationDisabled={isAnimationDisabled} customAnimation={customAnimation}>
            {props.children}
        </StyledGradientBG>
    )
}
