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
 * Connexion à la DB
 * ================================================================
 */
require("./db/database");

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
app.listen(PORT, () => {
  console.log(
    boxen(
      "✅ - Serveur démarrer à cette adresse: ".gray +
        "http://" +
        `${HOSTNAME}`.red.bold +
        ":" +
        `${PORT}`.cyan.bold,
      {
        float: "left",
        dimBorder: false,
        title:
          "ℹ - Connexion au serveur pour le projet : " +
          "TP_Contact_Pro_Manager".magenta.bold,
        titleAlignment: "right",
        borderColor: "blue",
        borderStyle: "round",
        margin: {
          top: 1,
          bottom: 0,
          left: 4,
        },
        padding: {
          top: 1,
          bottom: 1,
          left: 12,
          right: 12,
        },
      }
    )
  );
  console.log(
    "\t\t\t\t\t\t\t\tBy Alain GUILLON".green.italic + " - DFS26C".italic.bold
  );
});
