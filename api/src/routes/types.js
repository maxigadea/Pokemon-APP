const {Router} = require('express');
const axios = require('axios');
const { Pokemon, Type} = require('../db');

const router = Router();

router.get("/", async (req, res) => {
    const typesApi = await axios.get('https://pokeapi.co/api/v2/type')
    let result = typesApi.data.results;
    const typesNames = result.map(el => el.name)
    typesNames?.map(e => { Type.findOrCreate({
        where: { name: e} 
    }) 
    })  
    const alltypes = await Type.findAll()
    res.send(alltypes)
});

module.exports = router;