const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
const chef = require("./data/chef.json");
const recipe = require("./data/recipe.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chef", (req, res) => {
  console.log(chef);
  res.send(chef);
});
app.get("/recipe", (req, res) => {
  console.log(recipe.recipes);
  res.send(recipe);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedRecipe = recipe
    .flatMap((n) => n.recipes)
    .find((recipe) => recipe.id === parseInt(id));
  res.send(selectedRecipe);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const chefRecipe = recipe.filter((n) => n.chef_id === parseInt(id));
  res.send(chefRecipe);
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
