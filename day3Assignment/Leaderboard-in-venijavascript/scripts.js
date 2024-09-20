let form = document.querySelector("form");
let formElements = Array.from(document.forms[0].children);
let submit = document.querySelector("button");
let board = document.querySelector(".board");

let listedLeaderboardData = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let element = {}
    formElements.forEach((elem) => (element[elem.id] = elem.value));
    console.log(element)
    if (element.fname.length === 0 || element.countryname.length === 0 || element.score.length === 0) {
        alert("Please fill all the data!");
    } else {
        listedLeaderboardData.push(element);
        populateData(listedLeaderboardData);
    }
})

const updateScore = (index, number) => {
    listedLeaderboardData[index].score = Number(listedLeaderboardData[index].score) + number;
    populateData(listedLeaderboardData);
}

const deleteElement = (index) => {
    listedLeaderboardData.splice(index, 1);
    populateData(listedLeaderboardData);
}

const populateData = (data) => {
    board.innerHTML = '';
    data.sort((a, b) => b.score - a.score);

    data.forEach((element, index) => {
        let Card = document.createElement("div");
        let name = document.createElement("p");
        name.innerText = element.name;
        let countryname = document.createElement("p");
        countryname.innerText = element.countryname;
        let score = document.createElement("p");
        score.innerText = element.score;

        let increment = document.createElement("button");
        increment.innerText = "+5";
        increment.addEventListener("click", () => updateScore(index, 5));

        let decrement = document.createElement("button");
        decrement.innerText = "-5";
        decrement.addEventListener("click", () => updateScore(index, -5));

        let deletebutton = document.createElement("button");
        deletebutton.innerText = "Delete";
        deletebutton.addEventListener("click", () => deleteElement(index));

        Card.append(name, countryname, score, increment, decrement, deletebutton);
        board.append(Card);
    });
}
