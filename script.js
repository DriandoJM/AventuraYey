// Estrutura de dados para a história do jogo
const story = {
    start: {
        text: "Você chega à ilha misteriosa. O clima está pesado e a atmosfera é carregada de mistério. O que deseja fazer?",
        image: "images/start.jpg",
        choices: [
            { text: "Explorar a floresta", next: "forest" },
            { text: "Ir para a vila abandonada", next: "village" }
        ]
    },
    forest: {
        text: "Você entra na floresta densa e ouve sons estranhos ao seu redor. De repente, um grito distante quebra o silêncio. O que faz?",
        image: "images/forest.jpg",
        choices: [
            { text: "Seguir o som do grito", next: "scream" },
            { text: "Voltar e explorar a vila", next: "village" }
        ]
    },
    village: {
        text: "A vila está deserta e sombria. Casas abandonadas e uma atmosfera opressiva o rodeiam. O que deseja fazer?",
        image: "images/village.jpg",
        choices: [
            { text: "Entrar na casa principal", next: "mainHouse" },
            { text: "Explorar o cemitério", next: "cemetery" }
        ]
    },
    scream: {
        text: "Você segue o som do grito e encontra uma figura encapuzada em um altar antigo. Ela está realizando um ritual sinistro. O que faz?",
        image: "images/scream.jpg",
        choices: [
            { text: "Intervir no ritual", next: "intervene" },
            { text: "Observar e sair discretamente", next: "forestEscape" }
        ]
    },
    mainHouse: {
        text: "Dentro da casa, você encontra símbolos estranhos e uma atmosfera carregada de energia negativa. Uma presença parece vigiar você. O que faz?",
        image: "images/mainHouse.jpg",
        choices: [
            { text: "Investigar o porão", next: "basement" },
            { text: "Voltar para a floresta", next: "forest" }
        ]
    },
    cemetery: {
        text: "O cemitério é lúgubre e coberto de névoa. Túmulos antigos e uma sensação de ser observado pairam no ar. O que faz?",
        image: "images/cemetery.jpg",
        choices: [
            { text: "Desenterrar um túmulo suspeito", next: "grave" },
            { text: "Sair e voltar para a floresta", next: "forest" }
        ]
    },
    intervene: {
        text: "Você intervém no ritual, mas a figura encapuzada desaparece em uma nuvem de fumaça negra. O que você faz agora?",
        image: "images/intervene.jpg",
        choices: [
            { text: "Explorar o altar", next: "altar" },
            { text: "Voltar para a vila", next: "village" }
        ]
    },
    basement: {
        text: "No porão, você encontra um diário antigo e alguns artefatos estranhos. O diário menciona um segredo sobre a ilha. O que faz?",
        image: "images/basement.jpg",
        choices: [
            { text: "Ler o diário", next: "diary" },
            { text: "Procurar uma saída", next: "mainHouse" }
        ]
    },
    grave: {
        text: "Você desenterra um túmulo e encontra uma caixa contendo documentos antigos e uma chave misteriosa. O que faz?",
        image: "images/grave.jpg",
        choices: [
            { text: "Examinar os documentos", next: "documents" },
            { text: "Voltar e explorar a vila", next: "village" }
        ]
    },
    altar: {
        text: "Você encontra um antigo livro de rituais no altar, com instruções para realizar um feitiço de proteção. O que faz?",
        image: "images/altar.jpg",
        choices: [
            { text: "Tentar realizar o feitiço", next: "ritual" },
            { text: "Sair rapidamente", next: "forestEscape" }
        ]
    },
    diary: {
        text: "O diário revela a existência de um culto antigo e uma profecia sobre a ilha. Há algo mais a ser descoberto. O que faz?",
        image: "images/diary.jpg",
        choices: [
            { text: "Procurar mais pistas", next: "search" },
            { text: "Deixar a casa", next: "forest" }
        ]
    },
    documents: {
        text: "Os documentos falam sobre uma caverna secreta que pode conter a verdade sobre a ilha. O que faz?",
        image: "images/documents.jpg",
        choices: [
            { text: "Procurar a caverna", next: "cave" },
            { text: "Voltar e explorar a vila", next: "village" }
        ]
    },
    ritual: {
        text: "O feitiço parece funcionar e você sente uma pressão ao seu redor. No entanto, algo ainda parece não estar certo. O que faz?",
        image: "images/ritual.jpg",
        choices: [
            { text: "Investigar a área ao redor", next: "surroundings" },
            { text: "Voltar para a floresta", next: "forest" }
        ]
    },
       surroundings: {
        text: "Olhando melhor ao redor você nota uma estranha neblina, quase líquida, cobrindo o chão, seguido de uma estranha apreensão. O que faz?",
        image: "images/surroundings.jpg",
        choices: [
            { text: "Voltar para a vila", next: "village" },
            { text: "Voltar para a floresta", next: "forest" }
        ]
    },
    forestEscape: {
        text: "Você consegue escapar da figura encapuzada, mas a ilha ainda guarda muitos mistérios. O que faz?",
        image: "images/forestEscape.jpg",
        choices: [
            { text: "Explorar mais", next: "forest" },
            { text: "Sair da ilha", next: "end" }
        ]
    },
    search: {
        text: "Você encontra uma entrada secreta na casa que leva a um antigo templo. O que faz?",
        image: "images/search.jpg",
        choices: [
            { text: "Entrar no templo", next: "temple" },
            { text: "Sair da casa", next: "forest" }
        ]
    },
    cave: {
        text: "A caverna é escura e úmida, com uma sensação de presença ameaçadora. Você encontra uma entrada para um local ainda mais profundo. O que faz?",
        image: "images/cave.jpg",
        choices: [
            { text: "Entrar na caverna profunda", next: "deepCave" },
            { text: "Voltar para a vila", next: "village" }
        ]
    },
    deepCave: {
        text: "No fundo da caverna, você encontra um antigo altar com uma fonte de luz estranha. O que faz?",
        image: "images/deepCave.jpg",
        choices: [
            { text: "Investigar o altar", next: "deepAltar" },
            { text: "Sair da caverna", next: "cave" }
        ]
    },
    temple: {
        text: "O templo é repleto de antigos artefatos e inscrições. Uma sensação de poder e perigo está no ar. O que faz?",
        image: "images/temple.jpg",
        choices: [
            { text: "Ler as inscrições", next: "inscriptions" },
            { text: "Explorar os artefatos", next: "artifacts" }
        ]
    },
    deepAltar: {
        text: "O altar contém um artefato poderoso que parece ser a chave para o segredo da ilha. O que faz?",
        image: "images/deepAltar.jpg",
        choices: [
            { text: "Pegar o artefato", next: "artifact" },
            { text: "Deixar o altar e sair", next: "deepCave" }
        ]
    },
    inscriptions: {
        text: "As inscrições falam sobre um antigo guardião da ilha que protege um segredo sombrio. O que faz?",
        image: "images/inscriptions.jpg",
        choices: [
            { text: "Procurar o guardião", next: "guardian" },
            { text: "Sair do templo", next: "forest" }
        ]
    },
    artifacts: {
        text: "Os artefatos são antigos e parecem ter uma conexão com o culto que usava a ilha para rituais. O que faz?",
        image: "images/artifacts.jpg",
        choices: [
            { text: "Estudar os artefatos", next: "studyArtifacts" },
            { text: "Sair do templo", next: "forest" }
        ]
    },
    artifact: {
        text: "O artefato revela um segredo profundo sobre a ilha e pode ser a chave para resolver o mistério. O que faz?",
        image: "images/artifact.jpg",
        choices: [
            { text: "Usar o artefato", next: "useArtifact" },
            { text: "Voltar e investigar mais", next: "deepCave" }
        ]
    },
    guardian: {
        text: "Você encontra o guardião, uma entidade antiga que desafia sua presença. O que faz?",
        image: "images/guardian.jpg",
        choices: [
            { text: "Confrontar o guardião", next: "confrontGuardian" },
            { text: "Tentar fugir", next: "forestEscape" }
        ]
    },
    studyArtifacts: {
        text: "Estudar os artefatos revela uma conexão com a energia da ilha e rituais antigos. O que faz?",
        image: "images/studyArtifacts.jpg",
        choices: [
            { text: "Descobrir o segredo", next: "secret" },
            { text: "Sair do templo", next: "forest" }
        ]
    },
    useArtifact: {
        text: "Usar o artefato pode alterar o equilíbrio da ilha e revelar a verdade. O que faz?",
        image: "images/useArtifact.jpg",
        choices: [
            { text: "Revelar o segredo", next: "revealSecret" },
            { text: "Sair da ilha", next: "end" }
        ]
    },
    secret: {
        text: "Você descobre que um pintor escondeu que a ilha possui um portal para um mundo macabro através de quadros. O que faz?",
        image: "images/secret.jpg",
        choices: [
            { text: "Entrar no portal", next: "portal" },
            { text: "Sair da ilha", next: "end" }
        ]
    },
    revealSecret: {
        text: "O segredo revelado mostra a verdade sombria sobre a ilha e seu propósito. Você conseguiu resolver o mistério.",
        image: "images/revealSecret.jpg",
        choices: [
            { text: "Jogar novamente", next: "start" }
        ]
    },
    portal: {
        text: "Você entra no portal e encontra um novo mundo cheio de mistérios e perigos. A aventura continua...",
        image: "images/portal.jpg",
        choices: [
            { text: "Explorar o novo mundo", next: "exploreNewWorld" },
            { text: "Voltar para a ilha", next: "end" }
        ]
    },
    exploreNewWorld: {
        text: "O novo mundo é vasto e cheio de perigos desconhecidos. A aventura realmente nunca acaba.",
        image: "images/exploreNewWorld.jpg",
        choices: [
            { text: "Jogar novamente", next: "start" }
        ]
    },
    confrontGuardian: {
        text: "Você confronta o guardião e enfrenta desafios aterrorizantes. O que faz?",
        image: "images/confrontGuardian.jpg",
        choices: [
            { text: "Tentar a sorte", next: "winChallenge" },
            { text: "Fugir", next: "forestEscape" }
        ]
    },
    winChallenge: {
        text: "Você vence o desafio do guardião e descobre um segredo profundo sobre a ilha.",
        image: "images/winChallenge.jpg",
        choices: [
            { text: "Aprofundar-se no segredo", next: "secret" },
            { text: "Voltar para a vila", next: "village" }
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


//exagerei um bucadinho só, liga não
