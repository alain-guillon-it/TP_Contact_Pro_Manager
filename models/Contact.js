/**
 * ================================================================
 * Modules
 * ================================================================
 */
const mongoose = require("mongoose");

/**
 * ================================================================
 * Schema
 * ================================================================
 */
const ContactSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      minLength: 3,
      maxLength: 50,
      required: true,
    },
    lastname: {
      type: String,
      minLength: 3,
      maxLength: 50,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      minLength: 10,
      maxLength: 10,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    society: {
      type: String,
      required: true,
    },
    streetNumber: {
      type: Number,
      min: 1,
      max: 9999,
      required: true,
    },
    typeStreet: {
      type: String,
      required: false,
      default: null,
    },
    address: {
      type: String,
      required: true,
    },
    codePostal: {
      type: Number,
      required: true,
      min: 1,
      max: 99999,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

/**
 * ================================================================
 * Export
 * ================================================================
 */
module.exports = mongoose.model("contacts", ContactSchema);
