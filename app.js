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
 * Une première route modifié pour utiliser le moteur de rendue
 * ================================================================
 */
app.get(["/", "/home"], (req, res) => {
  res.status(200).render("pages/home", {
    data: {
      head: {
        title: "Accueil",
      },
    },
  });
});

app.get("/contact/add", (req, res) => {
  res.status(200).render("pages/add-contact", {
    data: {
      head: {
        title: "Ajout d'un nouveau contact",
      },
    },
  });
});

app.get("/contact/edit", (req, res) => {
  res.status(200).render("pages/edit-contact", {
    data: {
      head: {
        title: "Edition d'un contact",
      },
    },
  });
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
