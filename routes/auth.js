// Ruta: /api/auth

const { Router } = require("express");
const { getAuthURL, getAuthCode } = require("../controllers/auth");

const router = Router();

router.get("/", getAuthCode);

router.get("/url", getAuthURL);


module.exports = router;