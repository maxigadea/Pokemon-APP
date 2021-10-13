import React from 'react';
import { Link, useParams} from 'react-router-dom';
import { getDetail } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import Loader from './Loader';
import Pokebola from '../assets/img/pokebola.png'

 
const Detail = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect( () => {
       dispatch(getDetail(id)) 
    },[dispatch, id])
    const myPokemon = useSelector( state => state.pokemonsDetail)

    return (
        <div>
            {
                myPokemon ?
                <div>
                    <img src={myPokemon.image} alt='Pokemon'></img>
                    <h1>Name: {myPokemon.name}</h1>
                    <h2>Type: {myPokemon.type  + '  '}</h2>

                    <p>Attack: {myPokemon.attack}</p>
                    <p>HP: {myPokemon.hp}</p>
                    <p>Defense: {myPokemon.defense}</p>
                    <p>Speed: {myPokemon.speed}</p>
                    <p>Weight: {myPokemon.weight}</p>
                    <p>Height: {myPokemon.height}</p>
                </div> 
                :
                <Loader />
            }       
            <Link to= '/home' ><img src={Pokebola} alt='Home' width='50px'/></Link>
        </div>
    )
}

export default Detail
