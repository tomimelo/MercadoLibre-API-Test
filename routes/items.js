// Ruta: /api/items

const { Router } = require("express");
const { createItem, getItem } = require("../controllers/items");

const router = Router();

router.get("/:id", getItem);

router.post("/", createItem);

module.exports = router;