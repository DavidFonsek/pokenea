const { pokeneas } = require('../db/db');
const os = require('os');

class PokeneaApiController {
    static show(req, res) {

        const number = Math.floor(Math.random() * pokeneas.length);
        const pokenea = pokeneas[number];
        const { id, name, height, ability, quote } = pokenea

        let response = {
            id: id,
            name: name,
            height: height,
            ability: ability,
            quote: quote,
            hostName: os.hostname(),
        }

        res.send(response)
    }
}

module.exports = PokeneaApiController;