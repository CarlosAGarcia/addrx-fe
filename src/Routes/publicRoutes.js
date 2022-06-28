import React, { Component } from 'react'
import LandingPage from './pages/LandingPage'
import { Routes, Route } from "react-router-dom";
import DynamicRoute from './pages/DynamicRoute'
import Navbar from '../components/Navbar/Navbar'
import GradientBG from '../components/utilComponents/GradientBG'

// Tain station! choo choo! - Routes chosen here :))
/*

                            ______
                        .-"""".._'.       _,##
                  _..__ |.-"""-.|  |   _,##'`-._
                (_____)||_____||  |_,##'`-._,##'`
                _|   |.;-""-.  |  |#'`-._,##'`
              _.;_ `--' `\    \ |.'`\._,##'`
            /.-.\ `\     |.-";.`_, |##'`
            |\__/   | _..;__  |'-' /
            '.____.'_.-`)\--' /'-'`
              //||\\(_.-'_,'-'`
            (`-...-')_,##'`
        _,##`-..,-;##`
      _,##'`-._,##'`
  _,##'`-._,##'`
    `-._,##'`

*/

// NOTE - to pop out of the gradient background - match the route BEFORE it gets to <ROUTES />
export default class publicRoutes extends Component {
  render() {
    return (
      <div className='bodyContainer'>
        <Navbar/>
        <GradientBG>
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="*" element={<DynamicRoute/>} />
          </Routes>
        </GradientBG>

      </div>
    )
  }
}
