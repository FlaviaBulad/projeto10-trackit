import styled from 'styled-components';
import axios from 'axios';
import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../Assets/Images/logo.png";
import UserContext from '../../contexts/UserContext';

export default function LoginPage() {

    const loginDataObject = { //creating login data oject 
        email: '',
        password: '',
    };

    const navigate = useNavigate();
    const { token, setToken } = useContext(UserContext); //contextAPI 
    const { photo, setPhoto } = useContext(UserContext); //contextAPI 
    const [loginData, setLoginData] = useState(loginDataObject);

    function OnChange(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function LoginDataToAPI(e) {
        e.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", { ...loginData });
        promise.then((response) => {
            setToken(response.data.token);
            setPhoto(response.data.image);
            navigate("/habitos");
        });
        promise.catch((err) => {
            const errMessage = err.response.statusText;
            alert(`Oops deu algum pepino! reveja os campos e tente novamente. Erro: ${errMessage}`)
        });
    }

    function BuildingLoginForms() {
        return (
            <>
                <img src={Logo} alt="Logo" />
                <Form onSubmit={LoginDataToAPI}>
                    <Input
                        type="email" placeholder="email" name="email"
                        onChange={OnChange} value={loginData.email} required
                    />

                    <Input
                        type="password" placeholder="senha" name="password"
                        onChange={OnChange} value={loginData.password} required
                    />

                    <Button type="submit" >
                        Entrar
                    </Button>
                </Form>
                <StyledLink to="/cadastro/">
                    Não tem uma conta? Cadastre-se!
                </StyledLink>
            </>
        );
    }

    const loginForms = BuildingLoginForms();

    return (
        <Container>
            {loginForms}
        </Container>
    );
}

//style
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img{
    margin-top: 80px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  margin-bottom: 6px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  background-color:"#FFFFFF;";

  &::placeholder{
    color: #DBDBDB;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.6px;
  background: #52B6FF;
 
 font-family: 'Lexend Deca';
 font-style: normal;
 font-weight: 400;
 font-size: 20.976px;
 line-height: 26px;
 text-align: center;
 color: #FFFFFF;
`;

const StyledLink = styled(Link)`
 width: 232px;
 height: 17px;
 left: 74px;
 top: 451px;
 font-family: 'Lexend Deca';
 font-style: normal;
 font-weight: 400;
 font-size: 13.976px;
 line-height: 17px;
 text-align: center;
 text-decoration-line: underline;
 color: #52B6FF;
`;





