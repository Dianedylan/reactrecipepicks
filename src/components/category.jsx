import {FaDrumstickBite, FaPizzaSlice} from 'react-icons/fa';
import {GiFastNoodles, GiChopsticks, GiBarbecue} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

function Category(){
    return(
        <List>
            <SLink to={'/cuisine/American'}>
                <FaDrumstickBite/>
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/Japanese'}>
                <GiFastNoodles/>
                <h4>Japanese</h4>
            </SLink>
            <SLink to={'/cuisine/Chinese'}>
                <GiChopsticks/>
                <h4>Chinese</h4>
            </SLink>
            <SLink to={'/cuisine/African'}>
                <GiBarbecue/>
                <h4>African</h4>
            </SLink>


        </List>
    )
}

const List = styled.div`
display: flex;
justify-content: center;
`;
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 1rem;
margin-bottom: 2rem;
text-decoration: none;
background: linear-gradient(0deg, #494940, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);


h4{
    color: white;
    font-size: 0.8rem;
}

svg{
  color: white;
  font-size: 1.5rem;  
}

&.active{
    background: linear-gradient(to right, rgb(174, 105, 15), rgb(89, 53, 6));
}
svg{
    color:white;
}
h4{
    color: white;
}

`;

export default Category;