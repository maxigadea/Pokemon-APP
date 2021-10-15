import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemons } from '../actions';
import styled from 'styled-components';

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    console.log(name)

    function handleInputName(e){
        e.preventDefault();
        setName(e.target.value.toLowerCase());
    };


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNamePokemons(name))
    };

    return (
        <ContainerDiv>
            <input onChange={(e) => handleInputName(e)} type='text' placeholder='Pokemon Name'/>
            <Button type='submit' onClick={(e) => handleSubmit(e)}>Search</Button>
        </ContainerDiv>
    );
};

const ContainerDiv = styled.div`
    margin:14px;
`;    

const Button = styled.button`
    background-color: #2426257f;
    font-family: 'Montserrat', sans-serif;
    border: none;
    color: white;
    padding:7px;
    width: 70px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    &:hover {
        background: #2426252f; 
        color: black;
    }
    
`;  