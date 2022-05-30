import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function Header() {
    const { photo } = useContext(UserContext); //contextAPI 
    return (
        <>
            <Container>
                <Logo>
                    TrackIt
                </Logo>
                <img src={photo} alt="profile pic" />
            </Container>
        </>
    );
}

//style

const Container = styled.header`
position: absolute;
width: 100%;
height: 70px;
left: 0px;
top: 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
box-sizing: border-box;

img{
width: 51px;
height: 51px;
border-radius: 98.5px;
margin-right:10px;
box-sizing: border-box;
}
`;

const Logo = styled.h1`
width: 97px;
height: 49px;
box-sizing: border-box;
padding-left:20px;

font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
`