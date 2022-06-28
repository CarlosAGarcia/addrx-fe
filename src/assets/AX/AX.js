import React from 'react'
import styled from 'styled-components'

const AXStyle = styled.div`
  position: relative;
  min-width: 10rem;
    min-height: 5rem;
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .second {
    margin-left: -74px;
  }
`

const AX = ({ className, onClick, customTitle }) => {
  const title = customTitle ?? 'CLICK TO SHOW PASSWORD'
  return (
    <AXStyle>
      <div className='wrapper'>
        <svg className='first' width="127" height="74" viewBox="0 0 127 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bd_1_11)">
        <path d="M119.861 62.1041L61.8787 4.12132M7.87868 61.8614L36.8701 32.8701M36.8701 32.8701L65.8614 3.87868M36.8701 32.8701L65.9914 61.9914M36.8701 32.8701L35 31" stroke="#00FF94" stroke-opacity="0.36" stroke-width="6" shape-rendering="crispEdges"/>
        </g>
        <defs>
        <filter id="filter0_bd_1_11" x="-56.2426" y="-60.2426" width="240.225" height="186.468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImage" stdDeviation="31"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_11"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_backgroundBlur_1_11" result="effect2_dropShadow_1_11"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_11" result="shape"/>
        </filter>
        </defs>
        </svg>

        <svg className='second' width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bd_1_6)">
        <line x1="7.87868" y1="61.8614" x2="65.8614" y2="3.87868" stroke="#00FF94" stroke-opacity="0.36" stroke-width="6" shape-rendering="crispEdges"/>
        </g>
        <defs>
        <filter id="filter0_bd_1_6" x="-56.2426" y="-60.2426" width="186.225" height="186.225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImage" stdDeviation="31"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_6"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_backgroundBlur_1_6" result="effect2_dropShadow_1_6"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_6" result="shape"/>
        </filter>
        </defs>
        </svg>
      </div>
    </AXStyle>

  )
}

export default AX