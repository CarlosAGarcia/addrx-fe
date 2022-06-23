import React from 'react'
import StyledLandingPage from './styles/styledLandingPage'
import GradientBG from '../../components/utilComponents/GradientBG'
import AX from '../../assets/AX/AX'


export default function LandingPage() {

  return (
    <StyledLandingPage>
      <GradientBG>
        <div className='landingContainer yoshinoyaYellow'> <AX/> </div>
      </GradientBG>
    </StyledLandingPage>
  )
}

