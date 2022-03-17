import React, { Component } from 'react'
import Main from './pages/main'
import { Routes, Route } from "react-router-dom";

export default class publicRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/fuck" element={<div>FUKKK</div>} />

      </Routes>
    )
  }
}
