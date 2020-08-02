const { response } = require("express");
const axios = require("axios");

const { meliConfig } = require("../config");

const getItem = async( req, res = response ) => {

    const itemID = req.params.id;

    try {
        
        const resp = await axios.get(`${meliConfig.root_url}/items/${itemID}`);
        res.json(resp);
        
    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: "Error inesperado"
        });        
    }

}

const createItem = async(req, res = response) => {

    const token = req.query.access_token;
    const body = req.body;

    try {
        
        const resp = await axios.post(`${meliConfig.root_url}/items?access_token=${token}`, body);
        res.json(resp);
        
    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: "Error inesperado"
        });        
    }

}

module.exports = {
    createItem,
    getItem
}