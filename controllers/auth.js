const { response } = require("express");
const axios = require('axios');
const { meliConfig } = require("../config");

const getAuthURL = (req, res = response) => {

    const url = `${meliConfig.auth_url}?response_type=code&client_id=${meliConfig.client_id}&redirect_uri=${meliConfig.redirect_uri}`

    res.json({
        ok: true,
        url
    });

}

const getToken = async(req, res = response) => {

        const code = req.body.code;

        try {

            const resp = await axios.post(`${meliConfig.oauth_url}?grant_type=authorization_code&client_id=${meliConfig.client_id}&client_secret=${meliConfig.secret_key}&code=${code}&redirect_uri=${meliConfig.redirect_uri}`);

            res.json(resp.data);

        } catch (error) {

            res.status(500).json({
                ok: false,
                msg: "Error inesperado"
            });
            
        }
    

}

module.exports = {
    getAuthURL,
    getToken
}