import styled from "@emotion/styled";

export const Section = styled.section`

margin-left:auto;
margin-right:auto;
margin-top:30px;
max-width:500px;
padding-top:30px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
max-height: 200px;

`;

export const StatisticsTitle = styled.h2`
text-align: center;
margin-bottom: 30px;
`;

export const StatList = styled.ul`
list-style: none;
height: 100px;
display: flex;
justify-content: space-evenly;
margin-top: auto;

`;

const getRandomHexColor = ()=>{
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: calc(100%/5);
background-color: ${getRandomHexColor} ;
color: white;
`;

export const StatLabel = styled.span`
font-size: 16px;
`;

export const Percentage = styled.span`
font-size: 20px;
`;
