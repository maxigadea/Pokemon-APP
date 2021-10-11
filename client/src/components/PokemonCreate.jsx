import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postPokemon, getTypes} from '../actions'
import {useDispatch, useSelector} from 'react-redux';

const PokemonCreate = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const type = useSelector(state => state.type)
    const [input, setInput] = useState ({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: "",
        type: [],
        image: "",
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    };

    function handleSelect(e) {
        setInput({
            ...input,
            type: [...input.type, e.target.value]
        })
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postPokemon(input))
        alert('Pokemon Created!!!')
        setInput({
            name: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            weight: "",
            height: "",
            type: [],
            image: "",
        })
        history.push('/home')
    };

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    return (
        <div>
            <Link to= 'home' ><button>Home</button></Link>
            <h1>Create Your Pokemon</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input
                    type='text'
                    value={input.name}
                    name='name'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Hp:</label>
                    <input
                    type='text'
                    value={input.hp}
                    name='hp'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Attack:</label>
                    <input
                    type='text'
                    value={input.attack}
                    name='attack'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Defense:</label>
                    <input
                    type='text'
                    value={input.defense}
                    name='defense'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Speed:</label>
                    <input
                    type='text'
                    value={input.speed}
                    name='speed'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Weight:</label>
                    <input
                    type='text'
                    value={input.weight}
                    name='weight'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Height:</label>
                    <input
                    type='text'
                    value={input.height}
                    name='height'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                    type='text'
                    value={input.image}
                    name='image'
                    onChange={handleChange}
                    />
                </div>
                <label>Type one:</label>
                <select onChange={e => handleSelect(e)}>
                  {type.map(type => {
                      return (
                        <option value={type.name}>{type.name}</option>
                      )
                  })}
                </select>
                <label>Type two:</label>
                <select onChange={e => handleSelect(e)}>
                  {type.map(type => {
                      return (
                        <option value={type.name}>{type.name}</option>
                      )
                  })}
                </select>
                <div>
                <button type='submit'>Create Pokemon</button>
                </div>
            </form>
        </div>
    )
}

export default PokemonCreate
