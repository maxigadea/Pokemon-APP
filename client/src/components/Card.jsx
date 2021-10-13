import React from 'react'
import styled from 'styled-components';

const Card = ({ img, name, type}) => {
    return (
        <PokeDiv>
            <InfoDiv>
            <h2>{name}</h2>
            <h5>{type}</h5>
            </InfoDiv>
            <ImgDiv>   
            <img src={img} alt="img not found" />
            </ImgDiv>
        </PokeDiv>
    )
};

export default Card;

const PokeDiv = styled.div`
    display: inline-block;
    justify-content: center;
    position: relative;
    overflow: hidden;
    margin: 10px;
    width:400px;
    color: white;
    background: #2426257f;
    border-radius: 0.5rem;
`;

const InfoDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    margin:20px;

`;

const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
    height: 50vh;
`;

