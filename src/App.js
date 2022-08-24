import { React, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Video from './pages/Video'
import SignIn from './pages/SignIn'
import { darkTheme, lightTheme } from './utils/Theme'

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex:7
`

const Wrapper = styled.div`
  padding: 22px 96px;
`

function App() {
  const [ darkMode, setDarkMode ] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Main style = {{ backgroundColor: darkMode ? '#181818' : '#f9f9f9' }}>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home />} />
                  <Route path='trends' element={<Home />} type='trend'/>
                  <Route path='subs' element={<Home />} type='sub' />
                  <Route path='signin' element={<SignIn />} />
                  <Route path='video'>
                    <Route path=':id' element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App;
