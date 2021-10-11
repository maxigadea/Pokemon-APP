const express = require('express')
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('./pokemons');
const type = require('./types');

const router = Router();
router.use(express.json())

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemons);
router.use("/types", type);





module.exports = router;
