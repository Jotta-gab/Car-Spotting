
function generateCards() {
    const galleryContainer = document.getElementById('gallery-container');
    const jsonServerUrl = 'https://json-car-spotting.vercel.app/cards';


    fetch(jsonServerUrl)
        .then(response => response.json())
        .then(data => {

            const shuffledData = shuffleArray(data);


            const firstSixData = shuffledData.slice(0, 6);

            firstSixData.forEach((card, index) => {
                const cardHTML = `
                    <div class="galery-card" id="card-${index + 1}">
                        <h2 class="galery-card-title">Sotting - ${index + 1}</h2>
                    </div>
                `;
                galleryContainer.innerHTML += cardHTML;


                const currentCard = document.getElementById(`card-${index + 1}`);


                currentCard.style.cssText = `background-image: url('${card.url}');`;
            });
        })
        .catch(error => console.error('Erro ao buscar dados do JSON Server:', error));
}

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

window.onload = generateCards;

// Função para rolar suavemente para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};
