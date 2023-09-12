const { Router } = require("express");

const { Country, Activities } = require("../db");

const router = Router();

router.get("/countries", async (req, res, next) => {
  try {
    const allCountries = await Country.findAll();
    if (!allCountries)
      return res.status(404).json({ error: "Countries not found" });
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/countries/:idPais", async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundCountry = await Country.findOne({
      where: { id: id },
    });
    if (!foundCountry)
      return res.status(404).json({ Error: "Country not found" });
    res.status(200).json(foundCountry);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/countries/name?=", async (req, res, next) => {
  const { name } = req.query;
  try {
    const countries = await Country.findAll({
      where: { name: name },
    });
    if (!countries)
      return res.status(404).json({ error: "Country/countries not found" });
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/activities", async (req, res, next) => {
  const { nombre, dificultad, duracion, temporada } = req.body;
  try {
    const created = await Activities.create(
      nombre,
      dificultad,
      duracion,
      temporada
    );
    if (!created)
      return res.status(401).json({ error: "Activity not created" });
    res.status(200).json("created activity");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/activities", async (req, res, next) => {
  try {
    const activities = await Activities.findAll();
    if (!activities)
      return res.status(404).json({ error: "Activities not found" });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
