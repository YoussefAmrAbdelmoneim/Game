const searchParams = location.search;
const params = new URLSearchParams(searchParams);
const id = params.get("id");
let result2 = {};
async function details() {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
    result2 = await response.json();
    loader.classList.add("d-none");
    obj.display();
  } catch (error) {
    console.error(error);
  }
}
class displayDetails {
  display() {
    let cartona = "";
    cartona = `         
        <div class="col-md-4">
            <img src="${result2.thumbnail}"  class="w-100" alt="" />
          </div>
          <div class="col-md-8 text-white">
            <h3>Title:${result2.title}</h3>
            <p>Category:<span class="bg-info text-black desc ms-1">${result2.genre}</span></p>
            <p>Platform:<span class="bg-info text-black desc ms-1">${result2.platform}</span></p>
            <p>Status:<span class="bg-info text-black desc ms-1">${result2.status}</span></p>
            <p class="small">
            ${result2.description}
            </p>
            <a href="#" class="btn btn-outline-warning text-white" id="btn" onclick="openGame()">Show Game</a>
          </div>`;
    document.getElementById("row2").innerHTML = cartona;
  }
}
let obj = new displayDetails();
details();
function closeBtn() {
  location = "index.html";
}
let exit = document.getElementById("btnClose");
exit.addEventListener("click", function () {
  closeBtn();
});
let btn = document.getElementById("btn");
function openGame() {
  open(result2.game_url);
}
