import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from "../../Assets/Images/logo.png";

export default function SignUpPage() {  //Main function,reders the sigh up page

    const signUpDataObject = { //creating sign up data oject 
        email: '',
        name: '',
        image: '',
        password: '',
    };

    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState(signUpDataObject); //sign up data from forms

    function OnChange(e) { // forms OnChange function
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value }); //filling the sign up object with the forms data
    }

    function SignUpDataToAPI(e) { //sending all the data to api and redirectioning user to login page if successfull
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", { ...signUpData });
        promise.then(() => {
            navigate("/");
        });
        promise.catch((err) => {
            const errMessage = err.response.statusText;
            alert(`Oops deu algum pepino! reveja os campos e tente novamente. Erro: ${errMessage}`)
        });
    }

    function BuildingSignUpForms() {
        return (
            <>
                <img src={Logo} alt="Logo" />

                <Form onSubmit={SignUpDataToAPI}>
                    <Input
                        type="email" placeholder="email" name="email"
                        onChange={OnChange} value={signUpData.email} required
                    />

                    <Input
                        type="password" placeholder="senha" name="password"
                        onChange={OnChange} value={signUpData.password} required
                    />

                    <Input
                        type="text" placeholder="nome" name="name"
                        onChange={OnChange} value={signUpData.name} required
                    />

                    <Input
                        type="text" placeholder="foto" name="image"
                        onChange={OnChange} value={signUpData.image} required
                    />

                    <Button type="submit">
                        Cadastrar
                    </Button>
                </Form>

                <StyledLink to="/">
                    Já tem uma conta? Faça login!
                </StyledLink>
            </>
        );
    }

    const signUpForms = BuildingSignUpForms();

    return (
        <Container>
            {signUpForms}
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
 width: 210px;
 height: 17px;
 font-family: 'Lexend Deca';
 font-style: normal;
 font-weight: 400;
 font-size: 13.976px;
 line-height: 17px;
 text-align: center;
 text-decoration-line: underline;
 color: #52B6FF;
`;




