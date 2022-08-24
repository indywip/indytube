import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.text};
`

const Comment = ({src}) => {
    return (
        <Container> 
           <Avatar src={src} />
           <Details> 
            <Name>Hi <Date>today</Date> </Name>
            <Text>fiuhsdfjh</Text>
           </Details>
        </Container>
    )
}

export default Comment