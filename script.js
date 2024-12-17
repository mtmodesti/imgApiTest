var modal = document.getElementById("myModal");
var btn = document.getElementById("changeTextButton");
var closeModal = document.getElementById("closeModal");

btn.onclick = function () {
  modal.showModal();
};

closeModal.onclick = function () {
  modal.close();
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.close();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementById("closeModal");
  const changeTextButton = document.getElementById("changeTextButton");
  const modalImage = modal.querySelector("img");
  const loadingMessage = modal.querySelector(".loading-message");

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

  changeTextButton.onclick = () => {
    modalImage.src = "";
    loadingMessage.style.display = "block";
    modalImage.style.display = "none";
    fetchRandomImage();
    modal.showModal();
  };

  closeModal.onclick = () => {
    modal.close();
    modalImage.src = "";
    loadingMessage.style.display = "none";
    modalImage.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.close();
      modalImage.src = "";
      loadingMessage.style.display = "none";
      modalImage.style.display = "none";
    }
  };
});
