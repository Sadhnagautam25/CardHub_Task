// first step hum Schema create krenge means database ko btaenge ki hmara note kis format m hoga.

const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  image: String,
  name: String,
  location: String,
  title: String,
  description: String,
  IsLinkedin: Boolean,
  IsGithub: Boolean,
});


const cardModel = mongoose.model('userCards', cardSchema);

module.exports = cardModel;