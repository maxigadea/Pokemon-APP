const {Router} = require('express');
const axios = require('axios');
const { Pokemon, Types} = require('../db');

const router = Router();

router.get("/", async (req, res) => {
    const typesApi = await axios.get('https://pokeapi.co/api/v2/type')
    let result = typesApi.data.results;
    const typesNames = result.map(el => el.name)
    typesNames?.map(e => { Types.findOrCreate({
        where: { name: e} 
    }) 
    })  
    const alltypes = await Types.findAll()
    res.send(alltypes)
});

module.exports = router;