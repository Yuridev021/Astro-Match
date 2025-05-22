    document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".tinder--card");
    const heartsContainer = document.getElementById("hearts");
    let currentIndex = 0;

    function showCard(index) {
        if (index < 0 || index >= cards.length) return;
        cards.forEach((card, i) => {
        card.style.opacity = i === index ? "1" : "0";
        card.style.transform = i === index ? "translateY(0)" : "translateY(100%)";
        });
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤";
        heart.style.left = Math.random() * 100 + "%";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
        heart.remove();
        }, 1000);
    }

    function showHearts() {
        for (let i = 0; i < 5; i++) {
          setTimeout(createHeart, i * 100);
        }
    }

    document.getElementById("nope").addEventListener("click", () => {
        if (currentIndex < cards.length - 1) {
          cards[currentIndex].style.transform = "translateY(-100%)"; // Slide out upwards
        currentIndex++;
        showCard(currentIndex);
        }
    });

    document.getElementById("love").addEventListener("click", () => {
        showHearts();
        // Não avançar para a próxima pessoa ao curtir
    });

      // Alternar modo noturno
    document.getElementById("nightModeBtn").addEventListener("click", () => {
        document.body.classList.toggle("night-mode");
        const button = document.getElementById("nightModeBtn");
        if (document.body.classList.contains("night-mode")) {
        button.innerText = "🌞";
        } else {
        button.innerText = "🌙";
        }
    });

      // Função para voltar ao início da rolagem
    document.getElementById("scrollToTopBtn").addEventListener("click", () => {
        document.querySelector('.tinder--cards').scrollTo(0, 0); // Volta ao topo
        currentIndex = 0; // Reinicia o índice do cartão
        showCard(currentIndex);
    });

    showCard(currentIndex);
    });