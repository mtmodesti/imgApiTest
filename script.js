var modal = document.getElementById("myModal");
var btn = document.getElementById("changeTextButton");
var closeModal = document.getElementById("closeModal");
var changeImageButton = document.getElementById("changeImageButton");

var modalImage = modal.querySelector("img");
var loadingMessage = modal.querySelector(".loading-message");

btn.onclick = function () {
  modal.showModal();
  fetchRandomImage();
};

closeModal.onclick = function () {
  modal.close();
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.close();
  }
};

const fetchRandomImage = async () => {
  try {
    loadingMessage.style.display = "block";
    modalImage.style.display = "none";

    const response = await fetch("https://random.imagecdn.app/500/150");

    if (!response.ok) {
      throw new Error("Erro ao carregar imagem.");
    }

    modalImage.src = response.url;

    modalImage.onload = () => {
      loadingMessage.style.display = "none";
      modalImage.style.display = "block";
    };
  } catch (error) {
    console.error("Erro na requisição:", error);
    loadingMessage.textContent = "Erro ao carregar imagem";
  }
};

changeImageButton.onclick = () => {
  fetchRandomImage();
};
