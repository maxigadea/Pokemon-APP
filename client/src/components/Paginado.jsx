import React from 'react';
import styled from 'styled-components';

export default function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNumbers = []

    for(let i=1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <ContainerNav>
            <Ul>
                { pageNumbers.map(number => {
                return (
                    <A key={number} onClick={() => paginado(number)}>{number}</A>
                ) 
                })}
             </Ul> 
        </ContainerNav>  
    ) 
};

const ContainerNav = styled.nav`
    padding: 10px 0 20px 0;
`;    

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;    

const A = styled.a`
    margin-bottom: -30px;
    font-family: 'Montserrat', sans-serif;
    background: #2426257f;
    border-radius: 20px;
    color: white;
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
        background: #2426252f; 
        color: black;
    }
`;  