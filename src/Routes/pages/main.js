import React from 'react'
import { useLocation } from "react-router-dom";
import StyledMain from './styles/styledMain'

export default function Main() {
  const { pathname } = useLocation()
  console.log('pathname', pathname)
  return (
    <StyledMain>
      <div> - MAIN - </div> 
      <div>{`pathname is - ${pathname}`}</div>
    </StyledMain>
  )
}

