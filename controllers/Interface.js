/**
 * ================================================================
 * Import du modèle Contact
 * ================================================================
 */
const ContactModel = require("../models/Contact");

/**
 * ================================================================
 * Data
 * ================================================================
 */

// indice tableau d'errorMessage
let i = 0;

// Tableau errorMessage
const errorMessage = [];

const data = {
  errors: {
    tabError: [] ?? errorMessage,
  },
  title: "",
  contact: {} ?? document,
  contacts: [] ?? documents,
};

/**
 * ================================================================
 * CONTROLLER GET
 * ================================================================
 */

// OK
const getHome = (req, res, next) => {
  ContactModel.find()
    .then((documents) => {
      let { title, contacts } = data;
      title = "Accueil";
      contacts = documents;
      //console.log(documents, data);
      //console.log(title, contacts);
      res.status(200).render("pages/home", {
        title,
        contacts,
      });
    })
    .catch((err) => next(err.stack));
};

// PAS OK
const getCreateContact = (req, res, next) => {
  let { title, contact, errors } = data;
  title = "Nouveau contact";
  errors.tabError = errorMessage.length > 0 ? errorMessage : [];
  console.log(title, contact, errors, data);
  res.status(200).render("pages/add-contact", {
    title,
    contact,
    errors,
  });
};

// PAS OK
const getReadContact = (req, res, next) => {
  res.status(200).render("pages/show-contact", {
    title: "Un contact",
  });
};

// PAS OK
const getUpdateContact = (req, res, next) => {
  res.status(200).render("pages/edit-contact", {
    errors: {
      tabError: errorMessage,
    },
    title: "Edition d'un contact",
  });
};

// OK
const getDeleteContact = (req, res, next) => {
  if (req.params.id) {
    ContactModel.findById({ _id: req.params.id })
      .then((document) => {
        // console.log("Exite", document.id);
        ContactModel.deleteOne(this)
          .then(() => {
            res.redirect("/");
          })
          .catch();
      })
      .catch((err) => next(err.stack));
  }
};

// OK
const getRedirectToHome = (req, res, next) => {
  res.redirect("/");
};

/**
 * ================================================================
 * CONTROLLER POST
 * ================================================================
 */
const postCreateContact = (req, res, next) => {
  const contactObject = {
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
    sector: req.body.sector,
    society: req.body.society,
    streetNumber: parseInt(req.body.streetNumber),
    streetType: req.body.streetType,
    address: req.body.address,
    codePostal: parseInt(req.body.codePostal),
    city: req.body.city,
  };

  if (errorMessage.length > 0) {
    res.status(200).render("pages/add-contact");
  } else if (errorMessage.length == 0) {
    console.log(contactObject);
    const newContact = new ContactModel(contactObject);
    newContact
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => next(error.stack));
  }
};

const postUpdateContact = (req, res, next) => {
  // Data
  const contactObject = {
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
    sector: req.body.sector,
    society: req.body.society,
    streetNumber: parseInt(req.body.streetNumber),
    streetType: req.body.streetType,
    address: req.body.address,
    codePostal: parseInt(req.body.codePostal),
    city: req.body.city,
  };

  // Tableau d'erreur
  const errorMessage = [];

  // i tableau
  let i = 0;

  // Lastname
  if (contactObject.lastname == "") {
    errorMessage[i] = 'Le champ "Nom" ne peut-être vide';
    i++;
  } else if (contactObject.lastname.length < 3) {
    errorMessage[i] = 'Le champ "Nom" doit faire au minimum 3 caractères';
    i++;
  } else if (contactObject.lastname.length > 50) {
    errorMessage[i] = 'Le champ "Nom" ne peut pas dépasser 50 caractères';
    i++;
  } else if (typeof contactObject.lastname != "string") {
    errorMessage[i] =
      'Le champ "Nom" doit contenir exclusivement une chaîne de caractère';
    i++;
  }

  // Firstname
  if (contactObject.firstname == "") {
    errorMessage[i] = 'Le champ "Prénom" ne peut-être vide';
    i++;
  } else if (contactObject.firstname.length < 3) {
    errorMessage[i] = 'Le champ "Prénom" doit faire minimum 3 caractères';
    i++;
  } else if (contactObject.firstname.length > 50) {
    errorMessage[i] = 'Le champ "Prénom" ne peut pas dépasser 50 caractères';
    i++;
  } else if (typeof contactObject.firstname != "string") {
    errorMessage[i] =
      'Le champ "Prénom" doit contenir exclusivement une chaîne de caractère';
    i++;
  }

  // Email
  if (contactObject.email == "") {
    errorMessage[i] = 'Le champ "Email" ne peut-être vide';
    i++;
  } else if (typeof contactObject.firstname != "string") {
    errorMessage[i] =
      'Le champ "Email" doit exclusivement contenir une chaîne de caractère';
    i++;
  }

  // Phone
  if (contactObject.phone == "") {
    errorMessage[i] = 'Le champ "Téléphone" ne peut-être vide';
    i++;
  } else if (contactObject.phone.length != 10) {
    errorMessage[i] =
      'Le champ "Téléphone" doit faire exclusivement 10 caractères de type nombre';
    i++;
  } else if (typeof contactObject.phone != "string") {
    errorMessage[i] =
      'Le champ "téléphone" doit contenir exclusivement un type nombre';
    i++;
  }

  // Sector
  if (contactObject.sector == "") {
    errorMessage[i] = 'Le champ "Secteur" ne peut-être vide';
    i++;
  } else if (typeof contactObject.firstname != "string") {
    errorMessage[i] =
      'Le champ "Secteur" doit contenir exclusivement une chaîne de caractère';
    i++;
  }

  // Société
  if (contactObject.society == "") {
    errorMessage[i] = 'Le champ "Société" ne peut-être vide';
    i++;
  } else if (typeof contactObject.society != "string") {
    errorMessage[i] =
      'Le champ "Société" doit contenir exclusivement une chaîne de caractère';
    i++;
  }

  // StreetNumber
  if (contactObject.streetNumber == "") {
    errorMessage[i] = 'Le champ "N°" ne peut-être vide';
    i++;
  } else if (contactObject.streetNumber.length < 1) {
    errorMessage[i] = 'Le champ "N°" doit commencer au numéro 1';
    i++;
  } else if (contactObject.streetNumber.length > 9999) {
    errorMessage[i] = 'Le champ "N°" ne peut pas exéder 9999';
    i++;
  } else if (typeof contactObject.streetNumber != "number") {
    errorMessage[i] = 'Le champ "N°" doit contenir exclusivement un nombre';
    i++;
  }

  // Code Postal
  if (contactObject.codePostal == "") {
    errorMessage[i] = 'Le champ "Code Postal" ne peut-être vide';
    i++;
  } else if (contactObject.codePostal.length < 1) {
    errorMessage[i] = 'Le champ "Code Postal" doit commencer au numéro 1';
    i++;
  } else if (contactObject.codePostal.length > 99999) {
    errorMessage[i] = 'Le champ "Code Postal" ne peut pas exéder 99999';
    i++;
  } else if (typeof contactObject.codePostal != "number") {
    errorMessage[i] =
      'Le champ "Code Postal" doit contenir exclusivement un nombre';
    i++;
  }

  // City
  if (contactObject.city == "") {
    errorMessage[i] = 'Le champ "Ville" ne peut-être vide';
    i++;
  }

  // Address
  if (contactObject.address == "") {
    errorMessage[i] = 'Le champ "Adresse" ne peut-être vide';
    i++;
  }

  if (errorMessage.length > 0) {
    // console.log(errorMessage);
    res.status(200).render("pages/add-contact", {
      errors: {
        tabError: errorMessage,
      },
      data: {
        head: {
          title: "Ajout d'un nouveau contact",
        },
      },
    });
  } else if (errorMessage.length == 0) {
    next();
  }
};

/**
 * ================================================================
 * CONTROLLER PUT
 * ================================================================
 */
const putUpdateContact = (req, res, next) => {
  console.log("coucou");
  ContactModel.updateOne(
    { _id: req.request.id },
    {
      $set: {
        lastname: req.body.lastname,
      },
    }
  )
    .then(() => res.redirect("/"))
    .catch((err) => next(err.stack));
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
  putUpdateContact,
};
