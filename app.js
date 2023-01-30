/**
 * ================================================================
 * Modules
 * ================================================================
 */
require("dotenv").config();
require("colors");
const path = require("path");
const favicon = require("serve-favicon");
const boxen = require("boxen");
const morgan = require("morgan");
const express = require("express");

/**
 * ================================================================
 * Connexion à la DB
 * ================================================================
 */
require("./db/database");

/**
 * ================================================================
 * Import du "Routing"
 * ================================================================
 */
const router = require("./routes/interface.routes");

/**
 * ================================================================
 * Application
 * ================================================================
 */
const app = express();

/**
 * ================================================================
 * Utilisation du moteur de rendue "EJS"
 * ================================================================
 */
app.set("view engine", "ejs");

/**
 * ================================================================
 * Définition du HOSTNAME d'écoute et du HOSTNAME utilisé
 * ================================================================
 */
const PORT = process.env.PORT_LOCALHOST || 8080;
const HOSTNAME = process.env.HOSTNAME || "localhost";

/**
 * ================================================================
 * Utilisation de plusieurs middleware
 * ================================================================
 */
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(
  favicon(path.join(__dirname, "public", "images", "favicon", "favicon.ico"))
);

/**
 * ================================================================
 * Ajout du Router
 * ================================================================
 */
app.use("/", router.interface);

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
