let userAvatarWrapper = document.querySelector(".avtarContainer");
let addUser = document.getElementById("adduser");
let cancel = document.getElementById("cancel");
let userModel = document.getElementById("userModel");
let username = document.getElementById("username");
let confirmDelete = document.getElementById("confirmDelete");
let cancelDelete = document.getElementById("cancelDelete");
let userDeleteModel = document.getElementById("userDeleteModel");
let confirmationBoxText = document.getElementById("confirmationBoxText");

let userData = ["Guddu", "Tiwari", "Subham", "Jay"];
let delteElementIndex;
let lightColor = "#";
let darkColor = "#";

addUser.addEventListener("click", (e) => {
  e.preventDefault();
  let temp = username.value;
  if (temp) {
    userData.push(temp);
    username.value = "";
    appendUserAvatar(userData);
  }
});

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  handleHideModel();
});

cancelDelete.addEventListener("click", (e) => {
  e.preventDefault();
  handleHideModel();
});

confirmDelete.addEventListener("click", (e) => {
  e.preventDefault();
  userData.splice(delteElementIndex, 1);
  appendUserAvatar(userData);
});

function generateRandomHexColor() {
  lightColor = "#";
  darkColor = "#";
  let darkHexValues = "01234567";
  let lightHexValues = "89ABCDEF";

  for (let i = 0; i < 6; i++) {
    lightColor +=
      lightHexValues[Math.floor(Math.random() * lightHexValues.length)];
    darkColor +=
      darkHexValues[Math.floor(Math.random() * darkHexValues.length)];
  }

  return { lightColor, darkColor };
}

const handleOpenModel = (e) => {
  e.preventDefault();
  userModel.style.display = "flex";
};

const handleHideModel = () => {
  userModel.style.display = "none";
  userDeleteModel.style.display = "none";
};

const removeAvatar = (e, index) => {
  e.preventDefault();
  delteElementIndex = index;
  confirmationBoxText.innerText = `Are you sure to delete user:- ${userData[
    index
  ].toUpperCase()}`;
  userDeleteModel.style.display = "flex";
};

const appendUserAvatar = (userData) => {
  handleHideModel();
  userAvatarWrapper.innerHTML = null;
  userData.forEach((el, index) => {
    generateRandomHexColor();
    let avatarCard = document.createElement("div");
    avatarCard.classList = "avtar";
    avatarCard.style.backgroundColor = lightColor;
    avatarCard.style.color = darkColor;
    let span = document.createElement("span");
    span.innerText = el[0].toUpperCase();
    let icon = document.createElement("i");
    icon.classList = "fa-regular fa-circle-xmark modelCloseIcon";
    icon.addEventListener("click", (e) => removeAvatar(e, index));
    icon.style.backgroundColor = lightColor;
    avatarCard.append(span, icon);
    userAvatarWrapper.appendChild(avatarCard);
  });
  renderButton();
};

const renderButton = () => {
  let modelOpenbutton = document.createElement("button");
  modelOpenbutton.innerText = "+";
  modelOpenbutton.id = "openModelButton";
  modelOpenbutton.addEventListener("click", (e) => handleOpenModel(e));
  userAvatarWrapper.append(modelOpenbutton);
  document.querySelector("h1").style.color =
    generateRandomHexColor().lightColor;
};
appendUserAvatar(userData);
