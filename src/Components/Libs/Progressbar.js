import React from "react";
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { Link } from 'react-router-dom'

export default function Progressbar({percentage}){

  return(
    <>
     <Container>      
      <Link to="/hoje/" ><CircularProgressbar value={percentage} text={`Hoje`} background backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textSize: '20px',
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "#fff"
        })}
      /></Link>
    </Container> 
    </>   
  )
}

const Container = styled.div`
font-family: 'Lexend Deca';
  display:flex;
  width: 50%;
  align-items:center;
  justify-content: center;
  margin-bottom: 60px;
  padding: 20px;
`
