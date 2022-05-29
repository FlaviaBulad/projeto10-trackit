import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';

export default function Footer() {

    const percentage = 50;

    function BuildFooter() {
        return (
            <>
                 <StyledLink to="/habitos/">Hábitos</StyledLink>         
                <CircularProgressbar value={percentage} text='Hoje' />
                <StyledLink to="/historico">Histórico</StyledLink>
            </>
        );
    }
    const footer = BuildFooter();

    return (
        <Container>
            {footer}
        </Container>
        );
}

//style
const Container = styled.div`
position: fixed;
width: 375px;
height: 70px;
left: 0px;
bottom: 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
margin-left:70px;
background: #FFFFFF;
`
const StyledLink = styled(Link)`
width: 68px;
height: 22px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

color: #52B6FF;

`
