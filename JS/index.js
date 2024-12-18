import { displayUi } from "./ui.js";
let rpg = document.getElementById("rpg");
let shooter = document.getElementById("shooter");
let sailing = document.getElementById("sailing");
let permadeath = document.getElementById("permadeath");
let superhero = document.getElementById("superhero");
let pixel = document.getElementById("pixel");
let loader = document.getElementById("loader");
let result = [];
async function games(category) {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "67253615cdmsh43c22d4fb86964ep1073c6jsnb3e4f7d61960",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    loader.classList.remove("d-none");
    const response = await fetch(url, options);
    result = await response.json();
    loader.classList.add("d-none");
    obj.display(result);
  } catch (error) {
    console.error(error);
  }
}
let obj = new displayUi();
games("mmorpg");
rpg.addEventListener("click", function () {
  games("mmorpg");
  shooter.classList.remove("active");
  sailing.classList.remove("active");
  permadeath.classList.remove("active");
  pixel.classList.remove("active");
  superhero.classList.remove("active");
  rpg.classList.add("active");
});
shooter.addEventListener("click", function () {
  games("shooter");
  rpg.classList.remove("active");
  pixel.classList.remove("active");
  sailing.classList.remove("active");
  permadeath.classList.remove("active");
  superhero.classList.remove("active");
  shooter.classList.add("active");
});
sailing.addEventListener("click", function () {
  games("sailing");
  rpg.classList.remove("active");
  pixel.classList.remove("active");
  permadeath.classList.remove("active");
  superhero.classList.remove("active");
  shooter.classList.remove("active");
  sailing.classList.add("active");
});
permadeath.addEventListener("click", function () {
  games("permadeath");
  superhero.classList.remove("active");
  pixel.classList.remove("active");
  rpg.classList.remove("active");
  shooter.classList.remove("active");
  sailing.classList.remove("active");
  permadeath.classList.add("active");
});
superhero.addEventListener("click", function () {
  games("superhero");
  rpg.classList.remove("active");
  pixel.classList.remove("active");
  shooter.classList.remove("active");
  sailing.classList.remove("active");
  permadeath.classList.remove("active");
  superhero.classList.add("active");
});
pixel.addEventListener("click", function () {
  games("pixel");
  rpg.classList.remove("active");
  shooter.classList.remove("active");
  sailing.classList.remove("active");
  permadeath.classList.remove("active");
  superhero.classList.remove("active");
  pixel.classList.add("active");
});
function goto(id) {
  location.href = `./details.html?id=${id}`;
}
window.goto = goto;