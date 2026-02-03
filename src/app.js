const express = require("express");
const cors = require("cors");
const cardModel = require("./models/cards.model");
const path = require("path");

const app = express(); // server create ho gya
app.use(express.json()); // server json format read kr skta h
app.use(cors()); // isse cors policy allow ho jaegi
app.use(express.static("./public"));

// client side se user card create krega or server m save krega
// api name => /api/cards
// api method => POST
// status code => 201
// data ko destruturing krenge => req.body

app.post("/api/cards", async (req, res) => {
  const { image, name, location, title, description, IsLinkedin, IsGithub } =
    req.body;
  const card = await cardModel.create({
    image,
    name,
    location,
    title,
    description,
    IsLinkedin,
    IsGithub,
  });

  res.status(201).json({
    message: `hye 🙋‍♀️ ${card.name} your card create successfully.🎉`,
    card,
    status: "201 ✅",
  });
});

// av client ko sare card fatch krne hai.
// api name => /api/cards
// api method => GET
// status code => 200

app.get("/api/cards", async (req, res) => {
  const cards = await cardModel.find(); // ye find method database m jie bhi cards honge sbko fatch kr lega.
  res.status(200).json({
    message: "Fatch all the cards successfully.🎉",
    cards,
    status: "200 ✅",
  });
});

// av client koi card update krna hai
// api name => /api/cards
// api method => PUT
// status code => 200

app.put("/api/cards/:id", async (req, res) => {
  const id = req.params.id;
  const { image, name, location, title, description, IsLinkedin, IsGithub } =
    req.body;

  const updateCard = await cardModel.findByIdAndUpdate(id, {
    image,
    name,
    location,
    title,
    description,
    IsLinkedin,
    IsGithub,
  });

  res.status(200).json({
    message: `hye 🙋‍♀️ ${updateCard.name} your card updated successfully.🎉`,
    updateCard,
    status: "200 ✅",
  });
});

// av client koi card delete krna hai
// api name => /api/cards
// api method => DELETE
// status code => 204

app.delete("/api/cards/:id", async (req, res) => {
  const id = req.params.id;
  await cardModel.findByIdAndDelete(id);

  res.status(204);
});

app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "./public/index.html"));
});

module.exports = app;
