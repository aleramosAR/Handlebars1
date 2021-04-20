const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/productos/vista", (req, res) => {
  fetch('http://localhost:8080/api/productos').then(res => res.json()).then(function(data) {
    res.render("vista", { productos: data });
  });
});

router.get("/form", (req, res) => {
  res.render("form");
});

module.exports = router;