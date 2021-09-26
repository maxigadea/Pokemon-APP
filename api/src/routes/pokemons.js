const { default: axios } = require('axios');
const {Router} = require('express');

const router = Router();

router.get("/", async(req, res) => {
    const apiUrl = await axios.get("/https://pokeapi.co/api/v2/pokemon?limit=40")
    const apiInfo = await apiResults.data.map(elemento => {
       
});

module.exports = router;