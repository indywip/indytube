import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import YTLogo from '../img/youtube-logo.png'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import SmartScreenIcon from '@mui/icons-material/SmartScreen'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Container = styled.div`
    flex: 1.4;
    background-color: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    font-size: 14px;
    position: sticky;
    top: 0;
`

const Wrapper = styled.div`
    padding: 18px 26px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 16px;
`

const Img = styled.img`
    height: 25px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;

    &:hover {
        background-color: ${({ theme }) => theme.soft};
    }
`

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`

const Login = styled.div`
    cursor: pointer;
`

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Menu = ({ darkMode, setDarkMode }) => {
    return (
        <Container>
            <Wrapper>
                <Link to='/' style={{ textDecoration: 'none', color:'inherit' }}>
                    <Logo>
                        <Img src={YTLogo} />
                        IndyTube
                    </Logo>
                </Link>
                <Link to='/' style={{ textDecoration: 'none', color:'inherit' }}>
                    <Item>
                        <HomeIcon />
                        Home
                    </Item>
                </Link>
                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Link to='trends' style={{ textDecoration: 'none', color:'inherit' }}>
                    <Item>
                        <LocalFireDepartmentIcon />
                        Trending
                    </Item>
                </Link>
                <Link to='subs' style={{ textDecoration: 'none', color:'inherit' }}>
                    <Item>
                        <SmartScreenIcon />
                        Subscriptions
                    </Item>
                </Link>
                <Hr />
                <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Link to='signin' style ={{ textDecoration: 'none' }}>
                        <Button><AccountCircleIcon /> SIGN IN</Button>
                    </Link>
                </Login>
                <Hr />
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <Brightness4Icon />
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
            </Wrapper>
         </Container>
    )
}

export default Menu