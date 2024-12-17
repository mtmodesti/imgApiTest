fetch("https://api.unsplash.com/photos/random?client_id=SEU_ACESSO_AQUI")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const img = document.createElement("img");
    img.src = data[0].urls.small;
    document.body.appendChild(img);
  })
  .catch((error) => console.error("Erro ao obter imagem:", error));
