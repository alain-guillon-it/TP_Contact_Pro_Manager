/**
 * ================================================================
 * Documentation sur les messages dépréciés
 * ----------------------------------------------------------------
 * https://mongoosejs.com/docs/5.x/docs/deprecations.html
 * ================================================================
 */

/**
 * ================================================================
 * Modules
 * ================================================================
 */
const boxen = require("boxen");
const mongoose = require("mongoose");

/**
 * ================================================================
 * Récupération des variables d'environnements
 * ================================================================
 */
const PSEUDO = process.env.MONGODB_PSEUDO;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLIENT_NAME = process.env.MONGODB_CLIENT_NAME;
const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;

/**
 * ================================================================
 * Cacher le message de warning
 * ================================================================
 */

// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useNewUrlParser', true);
mongoose.set("strictQuery", true);

/**
 * ================================================================
 * Connexion
 * ================================================================
 */
mongoose
  .connect(
    `mongodb+srv://${PSEUDO}:${PASSWORD}@${CLIENT_NAME}.d51otgm.mongodb.net/${COLLECTION_NAME}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log(
      boxen(
        "Connexion réussi à la base de donnée ".grey +
          `${CLIENT_NAME}`.green.bold +
          " qui contient la collection : ".grey +
          `${COLLECTION_NAME}`.blue.bold,
        {
          float: "left",
          dimBorder: false,
          title: " ✅ - Succès DB Connexion : ",
          titleAlignment: "left",
          borderColor: "green",
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
      "\t\t\t\t\t\t\t\t\t\t\t\tBy Alain GUILLON".green.italic +
        " - DFS26C".italic.bold
    );
  })
  .catch((err) => {
    console.log(
      boxen(
        "Connexion échoué à la base de donnée ".grey + `${CLIENT_NAME}`.red.bold,
        {
          float: "left",
          dimBorder: false,
          title: " ❌ - Echec DB Connexion : ",
          titleAlignment: "right",
          borderColor: "red",
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
      "\t\t\t\t\t\tBy Alain GUILLON".green.italic + " - DFS26C".italic.bold
    );
  });
