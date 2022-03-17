import React, { Component } from 'react'

// import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from './Routes/publicRoutes'
import { ThemeProvider } from 'styled-components'
import { DARK, lightTheme, darkTheme } from './theme/theme'
import StylingWrapper from './theme/stylingWrapper'

class App extends Component {
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

    console.log('props', this.props)

    return (
      <ThemeProvider theme={this.getTheme}>
          <StylingWrapper>
            <BrowserRouter>
              <PublicRoutes theme={theme} />
              
            </BrowserRouter>
          </StylingWrapper>
      </ThemeProvider>
    )
  }
}

export default App;

