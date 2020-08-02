// Ruta: /api/users

const { Router } = require("express");
const { getMyInfo, getUserItems } = require("../controllers/users");

const router = Router();

router.get("/me", getMyInfo);

router.get("/:id/items", getUserItems);

module.exports = router;