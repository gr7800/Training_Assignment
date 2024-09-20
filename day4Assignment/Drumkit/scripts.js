let rightWrapper = document.querySelector("#right");

const renderRightSideContent = () => {
    rightWrapper.innerHTML = null;

    let crashDiv = document.createElement("div");
    crashDiv.classList.add("box");
    let crash = document.createElement("img");
    crash.src = "./assets/crash.png";
    crashDiv.append(crash);

    let kick = document.createElement("img");
    kick.src = "./assets/kick.png";
    let kickDiv = document.createElement("div");
    kickDiv.classList.add("box");
    kickDiv.append(kick);

    let snare = document.createElement("img");
    snare.src = "./assets/snare.png";
    let snareDiv = document.createElement("div");
    snareDiv.classList.add("box");
    snareDiv.append(snare);

    let tom = document.createElement("img");
    tom.src = "./assets/tom.png";
    let tomDiv = document.createElement("div");
    tomDiv.classList.add("box");
    tomDiv.append(tom);

    crashDiv.addEventListener("click", (e) => handleAudioPlay(e, "crash"));
    kickDiv.addEventListener("click", (e) => handleAudioPlay(e, "kick"));
    snareDiv.addEventListener("click", (e) => handleAudioPlay(e, "snare"));
    tomDiv.addEventListener("click", (e) => handleAudioPlay(e, "tom"));

    rightWrapper.append(crashDiv, kickDiv, snareDiv, tomDiv);
}

document.addEventListener("keypress", (e) => {
    e.preventDefault();
    if (e.key === "c") {
        handleAudioPlay(e, "crash")
    }
    if (e.key === "k") {
        handleAudioPlay(e, "kick")
    }
    if (e.key === "s") {
        handleAudioPlay(e, "snare")
    }
    if (e.key === "t") {
        handleAudioPlay(e, "tom")
    }
})

const handleAudioPlay = (e, name) => {
    e.preventDefault();
    let player = new Audio(`./assets/${name}.mp3`);
    player.play();
}

renderRightSideContent();
