/**
 * ================================================================
 * Module et initialisation du router
 * ================================================================
 */
const router = require("express").Router();

/**
 * ================================================================
 * ROUTER GET
 * ================================================================
 */
router.get(["/", "/home"], (req, res, next) => {
  res.status(200).render("pages/home", {
    data: {
      head: {
        title: "Accueil",
      },
    },
  });
});
router.get(["/contact", "/contact/edit", "/contact/delete"]);
router.get("/contact/add", (req, res, next) => {
  res.status(200).render("pages/add-contact", {
    data: {
      head: {
        title: "Ajout d'un nouveau contact",
      },
    },
  });
});
router.get("/contact/edit/:id", (req, res, next) => {
  res.status(200).render("pages/edit-contact", {
    data: {
      head: {
        title: "Edition d'un contact",
      },
    },
  });
});

router.get("/contact/delete/:id");

/**
 * ================================================================
 * ROUTER POST
 * ================================================================
 */
router.post("/contact/add", (req, res, next) => {
  res.status(200).render("pages/add-contact", {
    data: {
      head: {
        title: "Ajout d'un nouveau contact",
      },
    },
  });
});

/**
 * ================================================================
 * EXPORTS
 * ================================================================
 */
module.exports.interface = router;
