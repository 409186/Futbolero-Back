const router = require("express").Router();
const authRoutes = require("./auth.routes");
const equiposRoutes = require("./equipos.routes");
const partidosRoutes = require("./partidos.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({equipos: "Cruz Azul"});
});

router.use("/auth", authRoutes);
router.use("/perfil", equiposRoutes)
router.use("/partidos", partidosRoutes)

module.exports = router;
