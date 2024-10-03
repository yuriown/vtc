document.getElementById("showButton").addEventListener("click", function() {
    const image = document.getElementById("image");
    const phrase = document.getElementById("phrase");
  
    // Defina a URL da imagem e a frase que deseja exibir
    image.src = 'https://cdn-icons-png.flaticon.com/512/9460/9460815.png'; // Link da imagem
    phrase.textContent = "vai toma no cu rapa";
  
    // Adiciona a classe "show" para exibir a imagem e a frase com o efeito de delay
    image.classList.add("show");
    phrase.classList.add("show");
  });
  