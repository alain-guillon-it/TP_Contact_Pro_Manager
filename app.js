/**
 * ================================================================
 * Modules
 * ================================================================
 */
require("dotenv").config();
require("colors");
const boxen = require("boxen");
const express = require("express");

/**
 * ================================================================
 * Application
 * ================================================================
 */
const app = express();

/**
 * ================================================================
 * Définition du HOSTNAME d'écoute et du HOSTNAME utilisé
 * ================================================================
 */
const PORT = process.env.PORT_LOCALHOST || 8080;
const HOSTNAME = process.env.HOSTNAME || "localhost";

/**
 * ================================================================
 * Une première route
 * ================================================================
 */
app.get("/", (req, res) => {
  res.status(200).send("Première route");
});

/**
 * ================================================================
 * Démarrer le server selon le port d'écoute utilisé
 * ================================================================
 */
app.listen(PORT, () =>
  console.log(
    boxen(
      "Serveur démarrer à cette adresse: ".gray +
        "http://" +
        `${HOSTNAME}`.yellow.bold +
        ":" +
        `${PORT}`.cyan.bold,
      {
        float: "left",
        dimBorder: false,
        title: "Connexion au serveur",
        titleAlignment: "right",
        borderColor: "green",
        borderStyle: "round",
        margin: {
          top: 1,
          bottom: 1,
          left: 4,
        },
        padding: {
          top: 1,
          bottom: 1,
          left: 10,
          right: 10,
        },
      }
    )
  )
);
