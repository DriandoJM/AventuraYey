// Estrutura de dados para a história do jogo
const story = {
    start: {
        text: "Você chega na ilha misteriosa. O que você deseja fazer?",
        image: "images/start.jpg",
        choices: [
            { text: "Explorar a ilha", next: "explore" },
            { text: "Ir para a praia", next: "beach" }
        ]
    },
    explore: {
        text: "Você explora a ilha e encontra uma caverna. O que deseja fazer?",
        image: "images/explore.jpg",
        choices: [
            { text: "Entrar na caverna", next: "cave" },
            { text: "Voltar para o início", next: "start" }
        ]
    },
    beach: {
        text: "Na praia, você encontra um barco abandonado. O que você faz?",
        image: "images/beach.jpg",
        choices: [
            { text: "Investigar o barco", next: "boat" },
            { text: "Voltar para o início", next: "start" }
        ]
    },
    cave: {
        text: "Dentro da caverna, você encontra um antigo mapa. O que você deseja fazer?",
        image: "images/cave.jpg",
        choices: [
            { text: "Levar o mapa", next: "map" },
            { text: "Sair da caverna", next: "explore" }
        ]
    },
    boat: {
        text: "O barco está em boas condições. Você pode sair da ilha ou investigar mais. O que faz?",
        image: "images/boat.jpg",
        choices: [
            { text: "Sair da ilha", next: "end" },
            { text: "Investigar mais", next: "beach" }
        ]
    },
    map: {
        text: "O mapa revela um local escondido na ilha. Você pode ir lá ou voltar. O que faz?",
        image: "images/map.jpg",
        choices: [
            { text: "Ir para o local escondido", next: "hidden" },
            { text: "Voltar para a caverna", next: "cave" }
        ]
    },
    hidden: {
        text: "Você encontra um tesouro escondido! Parabéns, você venceu!",
        image: "images/hidden.jpg",
        choices: [
            { text: "Jogar novamente", next: "start" }
        ]
    },
    end: {
        text: "Você deixou a ilha. Obrigado por jogar!",
        image: "images/end.jpg",
        choices: [
            { text: "Jogar novamente", next: "start" }
        ]
    }
};

function startGame() {
    showStory("start");
}

function showStory(storyKey) {
    const storyDiv = document.getElementById('story');
    const choicesDiv = document.getElementById('choices');
    
    const storyData = story[storyKey];
    document.getElementById('scene-image').src = storyData.image;
    document.getElementById('story-text').textContent = storyData.text;

    choicesDiv.innerHTML = '';
    storyData.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesDiv.appendChild(button);
    });
}

window.onload = startGame;
