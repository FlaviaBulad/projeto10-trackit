import styled from "styled-components";
import axios from 'axios';

import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import UserContext from '../../contexts/UserContext';
import { useState, useEffect, useContext } from "react";
import { AiFillCheckSquare } from 'react-icons/ai';

export default function TodayPage() {

    const { token, setPercentage, percentage } = useContext(UserContext);
    const [done, setDone] = useState({ total: 0, done: 0 });
    const [habitsToday, setHabitsToday] = useState([]);
    const [reload, setReload] = useState({});

    setPercentage(Math.ceil((done.done / done.total) * 100) || 0);

    useEffect(() => {

        const config = { headers: { Authorization: `Bearer ${token}` } };

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(response => {
            const filterDone = response.data.filter((item, index) => response.data[index].done === true);
            setDone({ total: response.data.length, done: filterDone.length });
            setHabitsToday(response.data);
        })
        promise.catch((err) => {
            const errMessage = err.response.statusText;
            alert(`Oops deu algum pepino! Erro: ${errMessage}`)
        });
    }, [reload]);

    return (
        <>
            <Header />
            <Container>
                <Today />
                {habitsToday.map((habit, index) => <TodayHabit key={index} habit={habit} setReload={setReload}
                />)}
            </Container>
            <Footer reload={reload} />
        </>
    )
}

function Today() {
    const { percentage } = useContext(UserContext);

    const daysWeek = new Map([[0, 'Domingo'], [1, 'Segunda'], [2, 'Terça'], [3, 'Quarta'], [4, 'Quinta'], [5, 'Sexta'], [6, 'Sábado']]);
    const dayjs = require('dayjs');
    const day = dayjs().format('DD/MM');
    const weekday = daysWeek.get(dayjs().day());

    return (
        <>
            <div className="todayRender">
                <h2>{weekday}, {day}</h2>
                {percentage === 0
                    ? <h1 className="gray" >Nenhum hábito concluído ainda</h1>
                    : <h1 className="green">{percentage}% dos hábitos concluídos</h1>}
            </div>
        </>
    )
}

function TodayHabit({ habit, setReload }) {

    const { token } = useContext(UserContext);
    const { id, name, done, currentSequence, highestSequence } = habit;

    const [check, setCheck] = useState(done);

    const statusCheck = `check ${check ? 'green' : 'gray'}`;
    const colorSequence = `${currentSequence === highestSequence && highestSequence > 0 ? 'green' : 'grey'}`

    function checkAndUnCheck(id) {

        check ? setCheck(false) : setCheck(true);

        const config = { headers: { Authorization: `Bearer ${token}` } };

        !check ?
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, undefined, config)
                .then(response => setReload(response))
                .catch(err =>
                    console.log('Zicou ao marcar como feito', err))

            : axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, undefined, config)
                .then(response => setReload(response))
                .catch(err =>
                    console.log('Zicou ao desmarcar como feito', err))
    }

    return (

        <div className="habitsToday">
            <div>
                <h1>{name}</h1>
                <h3 className={colorSequence}>Sequencia atual: {currentSequence} dias</h3>
                <h3 className={colorSequence}>Seu recorde: {highestSequence} dias</h3>
            </div>
            <h1 className={statusCheck} onClick={() => checkAndUnCheck(id)}>
                <AiFillCheckSquare size={'80px'} color={`${check ? '#8FC549' : '#BABABA'}`} />
            </h1>
        </div>
    )
}

const Container = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;

    .todayRender{
        width: 100%;
        color: #126BA5;
        z-index: 0;
        font-family: 'Lexend Deca';
    }
    .todayRender h2{
        font-size: 23px;
        padding-top:100px;
        padding-left:20px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        font-family: 'Lexend Deca';
    }
    .todayRender h1{
        font-size: 19px;
        line-height: 22px;
        padding-top:5px;
        padding-left:20px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
      }

    .green{
        color:#8FC549;
    }

    .gray{
        color:#BABABA;
    }

    .habitsToday{
        width: 90%;
        background-color:#FFFFFF;
        border-radius: 5px;
        margin: 10px;
        display: flex;
        padding: 0px 10px 0px 10px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .habitsToday h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        color: #666666;
    }

    .check{
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

