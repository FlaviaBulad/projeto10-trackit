import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import Progressbar from '../Libs/Progressbar';
import axios from 'axios';

export default function Footer({ reload }) {
    const { token, percentage, setPercentage } = useContext(UserContext);
    const [infoDones, setDones] = useState({ total: 0, done: 0 });
    setPercentage(Math.ceil((infoDones.done / infoDones.total) * 100) || 0);

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promise.then(response => {
            const size = response.data.filter((item, index) => response.data[index].done === true); 
            setDones(
                {
                    total: response.data.length,
                    done: size.length,
                }
            );
        })
        promise.catch((err) => {
            const errMessage = err.response.statusText;
            alert(`Oops deu algum pepino! Erro: ${errMessage}`)
        });
    }, [reload]);

    function BuildFooter() {
        return (
            <>
                <StyledLink to="/habitos/">Hábitos</StyledLink>
                <Progressbar percentage={percentage} />
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
width: 100%;
height: 70px;
left: 0px;
bottom: 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
background: #FFFFFF;
padding-left:40px;
padding-right: 70px;
z-index: 0;
`
const StyledLink = styled(Link)`
width: 68px;
height: 22px;
text-decoration: none;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;

`
