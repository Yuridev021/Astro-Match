document.addEventListener("DOMContentLoaded", () => {
const toggleBtn = document.getElementById("lang-toggle");
let currentLang = "pt";


if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
    const heroTitle = document.getElementById("heroTitle");
    const heroDesc = document.getElementById("heroDesc");
    const heroBtn = document.getElementById("heroBtn");
    const sectionTitle = document.getElementById("sectionTitle");
    const sectionDesc = document.getElementById("sectionDesc");
    const sectionBtn = document.getElementById("sectionBtn");

    if (currentLang === "pt") {
        heroTitle.textContent = "Connect with your soulmate through your birth chart.";
        heroDesc.textContent = "Discover new connections based on universal energies and find who really matches you.";
        heroBtn.textContent = "Find Your Connection";
        sectionTitle.textContent = "The Power of the Stars in Your Life.";
        sectionDesc.textContent = "We use your birth chart info to help you meet people with compatible energies for lasting and meaningful relationships.";
        sectionBtn.textContent = "Learn More";
        toggleBtn.textContent = "🌐 EN";
        currentLang = "en";
    } else {
        heroTitle.textContent = "Conecte-se com sua Alma Gêmea pelo Mapa Astral.";
        heroDesc.textContent = "Descubra novas conexões baseadas nas energias do universo e encontre quem realmente combina com você, de acordo com seu signo, ascendente e mais.";
        heroBtn.textContent = "Descubra sua conexão";
        sectionTitle.textContent = "O Poder dos Astros na Sua Vida.";
        sectionDesc.textContent = "Usamos as informações do seu mapa astral para ajudá-lo a encontrar pessoas cujas energias são compatíveis com as suas, criando uma base sólida para relacionamentos duradouros e significativos.";
        sectionBtn.textContent = "Saiba Mais";
        toggleBtn.textContent = "🌐 PT";
        currentLang = "pt";
    }
    });
} else {
    console.warn("Botão de idioma não encontrado.");
}
});



const toggleButton = document.getElementById('toggleAcessibilidade');
const acessibilidade = document.querySelector('.acessibilidade');

toggleButton.addEventListener('click', () => {
    acessibilidade.classList.toggle('mostrar'); 
});

const aumentarFonte = document.getElementById('aumentarFonte');
const diminuirFonte = document.getElementById('diminuirFonte');
  const elementos = document.querySelectorAll('body, body *');

    let tamanhoFonte = 100; 

aumentarFonte.addEventListener('click', () => {
    tamanhoFonte += 2; 
    elementos.forEach(el => {
    el.style.fontSize = `${tamanhoFonte}%`;
    });
});

diminuirFonte.addEventListener('click', () => {
    tamanhoFonte -= 2; 
    elementos.forEach(el => {
    el.style.fontSize = `${tamanhoFonte}%`;
    });
});