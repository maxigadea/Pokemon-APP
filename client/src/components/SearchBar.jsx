import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemons } from '../actions';

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputName(e){
        e.preventDefault();
        setName(e.target.value.toLowerCase());
    };


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNamePokemons(name))
    };

    return (
        <div>
            <input onChange={(e) => handleInputName(e)} type='text' placeholder='Search...'/>
            <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    );
};