import styled from "@emotion/styled";


export const ProfileCard = styled.div`
max-width:500px;
padding-top: 60px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 10px;
color: gray;
font-family:'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const Description = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
font-size: 20px;

`;

export const Avatar = styled.img`
display:block;
    height: 200px;
    border-radius:50%;
    background-color:#F1F3F3;
`;

export const UserName = styled.p`
margin-top: 30px;
margin-bottom:15px;
font-size: 30px;
color: black;
font-weight:600;
`;

export const UserTag = styled.p`
margin-top: 0px;
margin-bottom: 15px;
`;

export const UserLocation = styled.p`
margin-top: 0px;
margin-bottom: 60px;
`;

export const Stats = styled.ul`
margin: 0px;
list-style: none;

padding:0px;
background-color:#E3E4E4;
border-top: 1px solid #BDBDBD;
display: flex;
justify-content: space-between;
align-items:center;

`;

export const StatsItem = styled.li`
margin: 0px;
display: flex;
flex-direction:column;
text-align:center;
padding-top:30px;
padding-bottom:30px;
padding-left: 40px;
padding-right:40px;
 width: calc(100% / 3);


&:not(:last-child){
    border-right:1px solid #BDBDBD ;
}
`;

export const Label = styled.span`
margin-bottom:15px;
`;

export const Quantity = styled.span`
font-weight:600;
color: black;
`;