import React from 'react'
import StyledLandingPage from './styles/styledLandingPage'
import GradientBG from '../../components/utilComponents/GradientBG'

export default function LandingPage() {

  return (
    <StyledLandingPage>
      <GradientBG>
        <div className='landingContainer yoshinoyaYellow'> - MAIN - </div>
      </GradientBG>
    </StyledLandingPage>
  )
}

