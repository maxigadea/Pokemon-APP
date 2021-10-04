import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function LandingPage() {
    return (
        <LandingDiv>
            <Title>Pokemon APP</Title>
            <Link to='/home'>
                <ButtonLanding>Go!</ButtonLanding>
            </Link>
        </LandingDiv>
    )
};

const LandingDiv = styled.div`
    

`;      
const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 70px;
    color: #FFFFFF;
    text-shadow: 2px 2px 8px #000000;
    margin-top: 80px;
`;  

const ButtonLanding = styled.button`
    border: 4px;
    border-radius: 9px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    width: 80px;
    margin-top: 420px;
    padding: 8px;
    color: #D98F21;
    &:hover {
        color: black;
    }
`;  