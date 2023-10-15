const shareButton = document.querySelector(".share-btn");
const sharePage = document.querySelector(".share_page");
const shareImg = document.querySelector(".share-img");
const container = document.querySelector(".container");

const openShare = function () {
  sharePage.classList.remove("hidden");
};

const closeShare = function () {
  sharePage.classList.add("hidden");
};

shareButton.addEventListener("click", openShare);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !sharePage.classList.contains("hidden")) {
    closeShare();
  }
});
