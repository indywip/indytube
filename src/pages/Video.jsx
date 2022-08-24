import React from 'react'
import styled from 'styled-components'

import Comments from '../components/Comments'
import Card from '../components/Card'

import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ReplyIcon from '@mui/icons-material/Reply'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

const Container = styled.div`
    display: flex;
    gap: 24px;
`

const Wrapper = styled.div`
`

const Content = styled.div`
    flex: 5
`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`

const Icons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
`

const Description = styled.p`
    font-size: 14px;
`

const Sub = styled.button`
    background-color: #CC0100;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 2px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`

const Recommend = styled.div`
    flex: 2
`

const Video = ({ video, pfp, title, info, name, subs, desc }) => {

    return (
        <Container>
            <Content>
                <Wrapper>
                    {/* <iframe
                    width='100%'
                    height='720'
                    src={video}
                    title={title}
                    frameborder='0' 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe> */}
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/CCF-xV3RSSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Wrapper>
                <Title> {title}title </Title>
                <Details>
                    <Info> {info}tst </Info>
                    <Icons>
                        <Icon><ThumbUpIcon /> 123 </Icon>
                        <Icon><ThumbDownIcon /> Dislike </Icon>
                        <Icon><ReplyIcon /> Share </Icon>
                        <Icon><LibraryAddIcon /> Save </Icon>
                    </Icons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src={pfp} />
                        <ChannelDetails>
                            <ChannelName> {name}name </ChannelName>
                            <ChannelCounter> {subs}48273 </ChannelCounter>
                            <Description>hfsjhdfhjs </Description>
                        </ChannelDetails>
                    </ChannelInfo>
                    <Sub> SUBSCRIBE </Sub>
                </Channel>
                <Hr />
                <Comments />
            </Content>
            <Recommend>
                <Card type='sm' />
            </Recommend>
        </Container>
    )
}

export default Video