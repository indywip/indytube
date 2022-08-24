import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TimeAgo from 'javascript-time-ago'

const Container = styled.div`
    width: ${(props) => props.type !== 'sm' && '360px'};
    margin-bottom: ${(props) => props.type === 'sm' ? '10px' : '45px'};
    cursor: pointer;
    display: ${(props) => props.type === 'sm' && 'flex'};
    gap: 10px;
`

const Image = styled.img`
    width: ${(props) => props.type === 'sm' ? '200px' : '350px'};
    height: ${(props) => props.type === 'sm' ? '120px' : '202px'};
    background-color: #f5f5f5;
    flex: 1;
`

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== 'sm' && '16px'};
    gap: 12px;
    flex: 1;
    flex-wrap: nowrap;
`

const ChannelPic = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #f5f5f5;
    display: ${(props) => props.type === 'sm' && 'none'};
`

const Text = styled.div`

`

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 9px 0px;
`

const VidInfo = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`

const Card = ({type, video }) => {

    const timeAgo = new TimeAgo('en-US')

    return (
        <Link to='/video/test' style={{ textDecoration: "none" }}>
        <Container type={type}>
            <Image type={type} src={video.img} />
            <Details type={type}>
                <ChannelPic type={type} src={ video.pfp } />
                <Text>
                    <Title >{video.title} </Title>
                    <ChannelName> {video.channelName} </ChannelName>
                    <VidInfo> {video.info} • { timeAgo.format(video.createdAt) } </VidInfo>
                </Text>
            </Details>
        </Container>
        </Link>
    )
}

export default Card