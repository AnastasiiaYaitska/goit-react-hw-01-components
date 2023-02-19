import styled from "@emotion/styled";

export const FriendItem = styled.li`
box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
border-radius: 10px;
display: flex;
padding-left: 20px;
padding-top: 15px;
padding-bottom: 15px;
gap: 20px;
max-width: 30%;
align-items: center;
&:not(:last-child){
    margin-bottom: 20px;
}
`;

export const Status = styled.span`
height: 25px;
width: 25px;
border-radius: 50%;
background-color: ${(prop) => {
    return prop.isOnline === true ? 'green' : 'red';
}};
`;

export const Avatar = styled.img`
   display: block;
    max-width: 100%;
    height: auto;
`;

export const UserName = styled.p`
 font-size: 30px;
 font-weight: 600;

`;