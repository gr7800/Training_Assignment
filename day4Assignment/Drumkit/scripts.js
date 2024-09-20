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

const handleHideKeyElement = (ElementId) => {
    let child = document.getElementById(`${ElementId}`)
    let parent = child.parentElement;
    parent.style.backgroundColor = "blanchedalmond";
    setTimeout(() => {
        let child = document.getElementById(`${ElementId}`)
        child.remove();
        parent.style.backgroundColor = "";
    }, 1000)
}

const renderKeyOnPress = (i, keyname) => {
    let keyElement = document.createElement("div");
    keyElement.classList = "key";
    keyElement.id = keyname
    keyElement.innerText = keyname;
    let BoxesCard = rightWrapper.children;
    BoxesCard[i].append(keyElement)
    handleHideKeyElement(keyname);
}

document.addEventListener("keypress", (e) => {
    e.preventDefault();
    if (e.key === "c") {
        renderKeyOnPress(0, "C");
        handleAudioPlay(e, "crash");
    }
    if (e.key === "k") {
        renderKeyOnPress(1, "K");
        handleAudioPlay(e, "kick");
    }
    if (e.key === "s") {
        renderKeyOnPress(2, "S");
        handleAudioPlay(e, "snare");
    }
    if (e.key === "t") {
        renderKeyOnPress(3, "T");
        handleAudioPlay(e, "tom");
    }
})

const handleAudioPlay = (e, name) => {
    e.preventDefault();
    let player = new Audio(`./assets/${name}.mp3`);
    player.play();
}

renderRightSideContent();
