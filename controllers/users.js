const { response } = require("express");
const axios = require("axios");

const { meliConfig } = require("../config");

const getMyInfo = async (req, res = response) => {

    const token = req.query.access_token;

    try {

        const resp = await axios.get(`${meliConfig.root_url}/users/me?access_token=${token}`);

        res.json(resp.data);

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: "Error inesperado"
        });
        
    }

}

const getUserItems = async (req, res = response) => {

    const token = req.query.access_token;
    const id = req.params.id;

    try{

        const resp = await axios.get(`${meliConfig.root_url}/users/${id}/items/search?access_token=${token}`);
        const results = resp.data.results;

        const items = await Promise.all(results.map(async itemID => {
            const res = await axios.get(`${meliConfig.root_url}/items/${itemID}`);
            return res.data;
        }));

        res.json({
            ok: true,
            items
        });

    } catch (error) {

        res.status = error.status

        res.json({
            ok: false,
            msg: error.message
        });
        
    }
}

module.exports = {
    getMyInfo,
    getUserItems
}