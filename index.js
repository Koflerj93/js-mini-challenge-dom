/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

const originalDiv = document.querySelector(".player-container")
PLAYERS.forEach(function(player) {
    const playerDiv = document.createElement("div")
    playerDiv.className = "player"
    playerDiv.dataset.number = player.number
    playerDiv.innerHTML = `
    <h3>
    ${player.name} (<em>${player.nickname}</em>)
  </h3>
  <img src="${player.photo}" alt="${player.name}">
    `
    originalDiv.append(playerDiv)
})


//console.log(playerDiv)

/***** Deliverable 4 *****/

let removePlayer = document.querySelector("[data-number='7']")
removePlayer.remove()

