const {Router} = require('express');
const axios = require('axios');

const router = Router();

router.get("/", (req, res) => {
    res.send("funciona 1")
});

module.exports = router;