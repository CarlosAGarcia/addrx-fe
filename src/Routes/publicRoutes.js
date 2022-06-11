import React, { Component } from 'react'
import LandingPage from './pages/LandingPage'
import { Routes, Route } from "react-router-dom";
import DynamicRoute from './pages/DynamicRoute'
import Navbar from '../components/Navbar/Navbar'
// Tain station! choo choo! - Routes chosen here :)
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
                      jgs _,##`-..,-;##`
                       _,##'`-._,##'`
                    _,##'`-._,##'`
                      `-._,##'`

*/
export default class publicRoutes extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="*" element={<DynamicRoute/>} />
        </Routes>
      </div>
    )
  }
}
