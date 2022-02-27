import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  // Switch
} from "react-router-dom";
import PublicRoutes from './Routes/publicRoutes'
import { ThemeProvider } from 'styled-components'
import { DARK, lightTheme, darkTheme } from './theme/theme'
import StylingWrapper from './theme/stylingWrapper'

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: DARK
    }
  }

  getTheme = () => {
    const { theme } = this.state
    return theme === DARK ? darkTheme : lightTheme
  }
  render() {
    const { theme } = this.state

    return (
      <ThemeProvider theme={this.getTheme}>
          <StylingWrapper>
              <PublicRoutes theme={theme} />
          </StylingWrapper>
      </ThemeProvider>
    )
  }
}

function App() {
  return (
    <Routes />
  );
}

export default App;

