/**
 * ================================================================
 * Module et initialisation du router
 * ================================================================
 */
const router = require("express").Router();

/**
 * ================================================================
 * Controller
 * ================================================================
 */
const myController = require("../controllers/Interface");

/**
 * ================================================================
 * ROUTER GET
 * ================================================================
 */
router.get(["/", "/home"], myController.getHome);
router.get(
  ["/contact", "/contact/edit", "/contact/delete"],
  myController.getRedirectToHome
);
router.get("/contact/add", myController.getCreateContact);
router.get("/contact/edit/:id", myController.getUpdateContact);
router.get("/contact/delete/:id", myController.getDeleteContact);

/**
 * ================================================================
 * ROUTER POST
 * ================================================================
 */
router.post("/contact/add", myController.postCreateContact);
router.post("/contact/edit/:id", myController.postUpdateContact); // Controle les champs

/**
 * ================================================================
 * ROUTER PATCH
 * ================================================================
 */
router.put("/contact/edit/:id", myController.postUpdateContact); // Mets à jour après le controle des champs

/**
 * ================================================================
 * EXPORTS
 * ================================================================
 */
module.exports.interface = router;
