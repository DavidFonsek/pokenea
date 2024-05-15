const PokeneaApiController = require('../controllers/PokeneaApiController');
const PokeneaController = require('../controllers/PokeneaController');
const express = require('express');

class Routes{
    static api(){
        const router = express.Router();

        router.get('/pokenea', PokeneaApiController.show);
        return router;
    }

    static web(){
        const router = express.Router();

        router.get('/pokenea', PokeneaController.show);
        return router;
    }
}

module.exports = Routes;