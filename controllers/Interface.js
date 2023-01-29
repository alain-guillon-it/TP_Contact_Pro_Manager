/**
 * ================================================================
 * Import du modèle Contact
 * ================================================================
 */
const ContactModel = require("../models/Contact");

/**
 * ================================================================
 * CONTROLLER GET
 * ================================================================
 */
const getHome = (req, res, next) => {
  ContactModel.find()
    .then((documents) => {
      console.log(documents);
      res.status(200).render("pages/home", {
        data: {
          head: {
            title: "Accueil",
          },
          body: documents,
        },
      });
    })
    .catch((err) => next(err.stack));
};

const getCreateContact = (req, res, next) => {
  res.status(200).render("pages/add-contact", {
    data: {
      head: {
        title: "Ajout d'un nouveau contact",
      },
    },
  });
};

const getReadContact = (req, res, next) => {
  res.status(200).render("pages/show-contact", {
    data: {
      head: {
        title: "Un contact",
      },
    },
  });
};

const getUpdateContact = (req, res, next) => {
  res.status(200).render("pages/edit-contact", {
    data: {
      head: {
        title: "Edition d'un contact",
      },
    },
  });
};

const getDeleteContact = (req, res, next) => {
  res.redirect("/");
};

const getRedirectToHome = (req, res, next) => {
  res.redirect("/");
};

/**
 * ================================================================
 * CONTROLLER POST
 * ================================================================
 */
const postCreateContact = (req, res, next) => {
  res.status(200).render("pages/add-contact", {
    data: {
      head: {
        title: "Ajout d'un nouveau contact",
      },
    },
  });
};

const postUpdateContact = (req, res, next) => {
  res.status(200).render("pages/edit-contact", {
    data: {
      head: {
        title: "Edition d'un contact",
      },
    },
  });
};

/**
 * ================================================================
 * EXPORTS
 * ================================================================
 */
module.exports = {
  getHome,
  getCreateContact,
  getReadContact,
  getUpdateContact,
  getDeleteContact,
  getRedirectToHome,
  postCreateContact,
  postUpdateContact,
};
