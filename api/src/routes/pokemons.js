const express = require('express')
const {Router} = require('express');
const  axios  = require('axios');
const { Pokemon, Types} = require('../db');



const router = Router();

router.use(express.json())

router.get("/", async(req, res, next) => {
    const { name } = req.query;
    //Verifico si me enviaron algo por query
    if(name) {
        try {
            let pokemonDB = await Pokemon.findAll({ where: {name: name}, include: Types })
            if(pokemonDB != 0) {
                     let response = pokemonDB.map(p => {
                         return ({
                            id: p.id,
                            name: p.name,
                            hp: p.hp,
                            attack: p.attack,
                            defense: p.defense,
                            speed: p.speed,
                            weight: p.weight,
                            height: p.height,
                            image: p.image,
                            type: p.dataValues.types.map( p => p.dataValues.name)
                         })
                     })
                 res.status(200).send(response);
            } else {
                try {
                    const pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                    let response = {
                        id: pokemonApi.data.id,
                        name: pokemonApi.data.name,
                        type: pokemonApi.data.types.map(e => e.type.name),
                        image: pokemonApi.data.sprites.other.dream_world.front_default,
                        attack: pokemonApi.data.stats[1].base_stat,
                        hp: pokemonApi.data.stats[0].base_stat,
                        defense: pokemonApi.data.stats[2].base_stat,
                        speed: pokemonApi.data.stats[5].base_stat,
                        weight: pokemonApi.data.weight,
                        height: pokemonApi.data.height,
                    }
                    return res.status(200).send(response);
                } catch (error) {
                   next(res.json({message: "Pokemon not found" })) 
                }
            }
        } catch (error) {
            next(error);
        }
    }
    
    // No me enviaron nada por query //
    try {
        //Traigo los de la DB
        let pokemonesDB = await Pokemon.findAll( {include: Types} )
        if(pokemonesDB) {
            pokemonesDB.map(p => {
                return {
                    id: p.id,
                    name: p.name,
                    type: p.dataValues.types.map( p => p.dataValues.name),
                    createdInDb: p.createdInDb,
                    attack: p.attack,
                }
            })
        }
        //Traigo los de la API
        const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
        const apiInfo = apiUrl.data.results;
        let pokemonData = [];
        for(p of apiInfo) {
            let subRequest = p.url;
            let subRequestData = await axios.get(`${subRequest}`)
            pokemonData.push({
                id:subRequestData.data.id,
                name: subRequestData.data.name,
                type: subRequestData.data.types.map(e => e.type.name),
                image: subRequestData.data.sprites.other.dream_world.front_default,
                attack: subRequestData.data.stats[1].base_stat,
            })
        } 
        res.status(200).send(pokemonesDB.concat(pokemonData));  //Guardo toda la info de la db y la api juntos
    } catch (error) {
        next("Api not found")
    }    
});

module.exports = router;