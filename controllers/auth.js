const { response } = require("express");
const meli = require('mercadolibre');

const meliObject = new meli.Meli(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

const getAuthURL = (req, res = response) => {

    try {

        const url = meliObject.getAuthURL(process.env.REDIRECT_URI);

        res.json({
            ok: true,
            url
        });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error inesperado"
        });
        
    }

}

const getAuthCode = (req, res = response) => {

        let code;

        if (req.query.code) {
            code = req.query.code;
        } else {
            return res.redirect("/");
        }

        try {

            meliObject.authorize(code, process.env.REDIRECT_URI, (err, response) => {
                if(err) {
                    console.log(err);
                } else {
                    res.json(response);
                }
            });    

        } catch (error) {

            res.status(500).json({
                ok: false,
                msg: "Error inesperado"
            });
            
        }
    

}

module.exports = {
    getAuthURL,
    getAuthCode
}