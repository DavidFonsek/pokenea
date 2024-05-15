const os = require('os');
const { pokeneas } = require('../db/db');

class PokeneaController {
    static show(req, res) {

        const number = Math.floor(Math.random() * pokeneas.length);
        const pokenea = pokeneas[number];
        const { image, quote } = pokenea

        const viewData = {
            image: image,
            quote: quote,
            hostname: os.hostname(),
        }

        res.render('pokenea', {viewData: viewData});
    }
}

module.exports = PokeneaController;