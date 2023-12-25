const router = require('express').Router();

const axios = require('axios');

const renderTemplate = require('../utils/renderTemplate');

const Rang1 = require("../views/Rang/Rang1");
const Rang2 = require("../views/Rang/Rang2");
const Rang3 = require("../views/Rang/Rang3");
const Rang4 = require("../views/Rang/Rang4");
const Rang5 = require("../views/Rang/Rang5");
const Rang6 = require("../views/Rang/Rang6");
const Rang7 = require("../views/Rang/Rang7");
const Rang8 = require("../views/Rang/Rang8");

router.get("/rang-heroes/1", async (req, res) => {
  try {
    const { user } = req.session;
    const response = await axios.get("https://api.opendota.com/api/heroStats");
    const heroes = response.data;

    renderTemplate(Rang1, { user, heroes }, res);
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/rang-heroes/2", async (req, res) => {
  try {
    const { user } = req.session;
    const response = await axios.get("https://api.opendota.com/api/heroStats");
    const heroes = response.data;

    renderTemplate(Rang2, { user, heroes }, res);
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/rang-heroes/3", async (req, res) => {
  try {
    const { user } = req.session;
    const response = await axios.get("https://api.opendota.com/api/heroStats");
    const heroes = response.data;

    renderTemplate(Rang3, { user, heroes }, res);
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/rang-heroes/4", async (req, res) => {
  try {
    const { user } = req.session;
    const response = await axios.get("https://api.opendota.com/api/heroStats");
    const heroes = response.data;

    renderTemplate(Rang4, { user, heroes }, res);
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/rang-heroes/5", async (req, res) => {
  try {
    const { user } = req.session;
    const response = await axios.get("https://api.opendota.com/api/heroStats");
    const heroes = response.data;

    renderTemplate(Rang5, { user, heroes }, res);
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/rang-heroes/6", async (req, res) => {
  try {
    const { user } = req.session;
    const response = await axios.get("https://api.opendota.com/api/heroStats");
    const heroes = response.data;

    renderTemplate(Rang6, { user, heroes }, res);
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/rang-heroes/7", async (req, res) => {
  try {
    const { user } = req.session;
    const response = await axios.get("https://api.opendota.com/api/heroStats");
    const heroes = response.data;

    renderTemplate(Rang7, { user, heroes }, res);
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/rang-heroes/8", async (req, res) => {
  try {
    const { user } = req.session;
    const response = await axios.get("https://api.opendota.com/api/heroStats");
    const heroes = response.data;

    renderTemplate(Rang8, { user, heroes }, res);
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;