import styled from 'styled-components';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import '../../styles/index.css';

export default function HabitsPage() {

    function BuildCreateHabitMenu(){
       return(
       <CreateHabit>
       </CreateHabit>
       );
    }

    return (
        <>
            <Header />
            <Container>
                <NewHabits>
                    <h1>Meus hábitos</h1>
                    <Button>+</Button>
                </NewHabits>
                <p>você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Container>
            <Footer />
        </>
    );
}

const CreateHabit = styled.div`
`

const Container = styled.div`
 margin-top:70px;
 display: flex;
 flex-direction: column;

 p{
   
width: 338px;
height: 74px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
margin-left:15px;
color: #666666;

 }
`

const NewHabits = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;
padding:15px;

h1{
width: 148px;
height: 29px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;

}
`
const Button = styled.button`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
border:none;
font-family: 'Lexend Deca';
font-size: 20px;
color: #FFFFFF;

`