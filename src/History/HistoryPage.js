import Footer from "../Components/Layouts/Footer";
import Header from "../Components/Layouts/Header";

import styled from "styled-components";

export default function HistoryPage() {
    return (
        <>
            <Header />
            <Container >
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Footer />
        </>
    );
}

//style

const Container = styled.div`
    margin-top: 100px;
    padding:10px;
    h1{
       
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;

}

    p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    }

`