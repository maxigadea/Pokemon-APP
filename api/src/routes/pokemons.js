const {Router} = require('express');
const  axios  = require('axios');
const { Pokemon, Types} = require('../db');

const router = Router();

router.get("/", async(req, res, next) => {
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
        const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?limit10');
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
            res.status(200).send(pokemonesDB.concat(pokemonData))
        } 
    } catch (error) {
        next("Api no responde")
    }
    
       
});

module.exports = router;