const router = require("express").Router();
const authRoutes = require("./auth.routes");
const equiposRoutes = require("./equipos.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({equipos: "Cruz Azul"});
});

router.use("/auth", authRoutes);
router.use("/perfil", equiposRoutes)

module.exports = router;
