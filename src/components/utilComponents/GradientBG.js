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

    ${({ isAnimationDisabled }) => !isAnimationDisabled &&
        `
            background-size: 400% 400%;
            animation: gradient 30s ease infinite;
        `
    };
    
    height: 100%;
    width: 100%;

    @keyframes gradient {
        ${({ gradientAnimation }) => gradientAnimation ? `
            ${ gradientAnimation }
        `:
            `0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 100%;
            }
            100% {
                background-position: 0% 50%;
            }`
        }
    }   
`

export default function GradientBG(props) {
    const { customBackgroundGradient, isAnimationDisabled = false, customAnimation } = props
    // const [ gradientAnimation ] = useState(() => {
    //     let stages = 3 + Math.floor(Math.random() * 3)
    //     let animation = ` 0% {

    //     }`
    //     for ()
    //     return `

    //     `
    // })



    return (
        <StyledGradientBG customBackgroundGradient={customBackgroundGradient} isAnimationDisabled={isAnimationDisabled} customAnimation={customAnimation}>
            {props.children}
        </StyledGradientBG>
    )
}
