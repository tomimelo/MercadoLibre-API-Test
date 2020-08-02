// Ruta: /api/auth

const { Router } = require("express");
const { getAuthURL, getToken } = require("../controllers/auth");

const router = Router();

router.get("/url", getAuthURL);

router.post("/token", getToken);

module.exports = router;