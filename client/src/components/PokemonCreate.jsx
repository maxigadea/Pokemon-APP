import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postPokemon, getTypes} from '../actions'
import {useDispatch, useSelector} from 'react-redux';
import Pokebola from '../assets/img/pokebola.png'
import styled from 'styled-components';

function validate(input) {
    let errors = {};
    if(!input.name) errors.name = 'Name Required!' 
    if(!input.hp) errors.hp = 'Hp need be a number 1 to 100!'
    if(!input.attack) errors.attack = 'Attack required!'
    if(!input.defense) errors.defense = 'Defense required!'
    if(!input.speed) errors.speed = 'Speed required!'
    if(!input.weight) errors.weight = 'Weight required!'
    if(!input.height) errors.height = 'Height required!'
    if(!input.image) errors.image = 'Insert a Image!'
    return errors;
}





const PokemonCreate = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const type = useSelector(state => state.type)
    const [errors, setErrors] = useState({})
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
        setErrors(validate({
            ...input,
            [e.target.value]: e.target.value
        }));
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
            <ContainerDiv>
            <Link to= 'home' ><img src={Pokebola} alt='Home' width='50px'/></Link>
            <h1>Create Your Pokemon!</h1>
            </ContainerDiv>
            <Form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input
                    type='text'
                    value={input.name}
                    name='name'
                    onChange={handleChange}
                    />
                    {errors.name && (
                        <Errorp>{errors.name}</Errorp>
                    )}
                </div>
                <div>
                    <label>Hp:</label>
                    <input
                    type='number'
                    value={input.hp}
                    name='hp'
                    min="1"
                    max='100'
                    onChange={handleChange}
                    />
                     {errors.hp && (
                        <Errorp>{errors.hp}</Errorp>
                    )}
                </div>
                <div>
                    <label>Attack:</label>
                    <input
                    type='number'
                    value={input.attack}
                    name='attack'
                    onChange={handleChange}
                    />
                    {errors.attack && (
                        <Errorp>{errors.attack}</Errorp>
                    )}
                </div>
                <div>
                    <label>Defense:</label>
                    <input
                    type='number'
                    value={input.defense}
                    name='defense'
                    onChange={handleChange}
                    />
                    {errors.defense && (
                        <Errorp>{errors.defense}</Errorp>
                    )}
                </div>
                <div>
                    <label>Speed:</label>
                    <input
                    type='number'
                    value={input.speed}
                    name='speed'
                    onChange={handleChange}
                    />
                    {errors.speed && (
                        <Errorp>{errors.speed}</Errorp>
                    )}
                </div>
                <div>
                    <label>Weight:</label>
                    <input
                    type='number'
                    value={input.weight}
                    name='weight'
                    onChange={handleChange}
                    />
                    {errors.weight && (
                        <Errorp>{errors.weight}</Errorp>
                    )}
                </div>
                <div>
                    <label>Height:</label>
                    <input
                    type='number'
                    value={input.height}
                    name='height'
                    onChange={handleChange}
                    />
                    {errors.height && (
                        <Errorp>{errors.height}</Errorp>
                    )}
                </div>
                <div>
                    <label>Image:</label>
                    <input
                    type='text'
                    value={input.image}
                    name='image'
                    onChange={handleChange}
                    />
                    {errors.image && (
                        <Errorp>{errors.image}</Errorp>
                    )}
                </div>
                <TypeDiv>
                <label>Type one:</label>
                <Select onChange={e => handleSelect(e)}>
                  {type.map(type => {
                      return (
                        <option value={type.name}>{type.name}</option>
                      )
                  })}
                </Select>
                <label>Type two:</label>
                <Select onChange={e => handleSelect(e)}>
                  {type.map(type => {
                      return (
                        <option value={type.name}>{type.name}</option>
                      )
                  })}
                </Select>
                </TypeDiv>
                <ContainerDiv2>
                <FormButton type='submit'>Create Pokemon</FormButton>
                </ContainerDiv2>
            </Form>
        </div>
    )
};

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 10px;
`;      

const ContainerDiv2 = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
`;          

const TypeDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 5px;
`;      

const Errorp = styled.p`
    color: #cc0033;
    display: inline-block;
    font-size: 13px;
    line-height: 15px;
    margin: 10px 0 0;
`;      

const Form = styled.form`
    width:400px;
    paddin:16px;
    border-radius:10px;
    margin:auto;
    background-color:#ccc;
`;  

const Select = styled.select`
    position: relative;
    height: 22px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
`;      
const FormButton = styled.button`
    background-color: #2426257f;;
    font-family: 'Montserrat', sans-serif;
    border: none;
    border-radius: 18px;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 10px;
    cursor: pointer;
    
`;     

export default PokemonCreate
