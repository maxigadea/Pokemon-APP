import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons, filterPokemonsByType, filterCreated, orderByName, orderByAttack} from '../actions'
import {Link} from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const Home = () => {
    const allPokemons = useSelector((state) => state.pokemons);
    const [orden, setOrden] = useState('');
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);  //PK por pagina
    const indexOfLastPokemon = currentPage * pokemonsPerPage 
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (() => {
        dispatch(getPokemons())
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
    };

    function handleFilterType(e) {
        dispatch(filterPokemonsByType(e.target.value))
    };

    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
    };

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`order ${e.target.value}`)
    };

    function handleSortAttack(e) {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value))
        setOrden(`order ${e.target.value}`)
    };


    return (
        <ContainerDiv>
            <Link to='/Pokemon'> New Pokemon </Link>
            <h1>Find Your Pokemon</h1>
            <button onClick={e => handleClick(e)}>Reload Pokemons</button>
            <div>
            <select onChange={e => handleSort(e)}>
                    <option>Order by Name:</option>
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                 </select>
                 <select onChange={e => handleSortAttack(e)}>
                    <option>Order by Attack:</option>
                    <option value='more'>More Strong</option>
                    <option value='less'>Less Strong</option>
                 </select>
                 <select onChange={e => handleFilterType(e)}>
                    <option value='All'>All</option>
                    <option value='normal'>Normal</option>
                    <option value='fighting'>Fighting</option>
                    <option value='flying'>Flying</option>
                    <option value='poison'>Poison</option>
                    <option value='ground'>Ground</option>
                    <option value='rock'>Rock</option>
                    <option value='bug'>Bug</option>
                    <option value='ghost'>Ghost</option>
                    <option value='steel'>Steel</option>
                    <option value='fire'>Fire</option>
                    <option value='water'>Water</option>
                    <option value='grass'>Grass</option>
                    <option value='electric'>Electric</option>
                    <option value='psychic'>Psychic</option>
                    <option value='ice'>Ice</option>
                    <option value='dark'>Dark</option>
                    <option value='fairy'>Fairy</option>
                    <option value='unknown'>Unknown</option>
                    <option value='shadow'>Shadow</option>
                 </select>
                <select onChange={e => handleFilterCreated(e)}>
                    <option value='All'>All</option>
                    <option value='created'>Created</option>
                    <option value='api'>Existing</option>
                 </select>
            </div>
            <SearchBar />
            <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginado={paginado} />
            {currentPokemons?.map(e => {
                    return (
                    <Link to= {'/home' + e.id}>
                        <Card name={e.name} img={e.image} type={e.type} key={e.id}/>
                    </Link>
                    )
                })    
            }
            <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginado={paginado} />
        </ContainerDiv>
     )
};

const ContainerDiv = styled.div`
    background-color: #D98F21; 
`;      

export default Home;
