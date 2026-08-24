/*
=========================================================
BANCO DE PAÍSES
=========================================================
*/
const countries = [
    ["Afeganistão", "af"],
    ["África do Sul", "za"],
    ["Albânia", "al"],
    ["Alemanha", "de"],
    ["Andorra", "ad"],
    ["Angola", "ao"],
    ["Antígua e Barbuda", "ag"],
    ["Arábia Saudita", "sa"],
    ["Argélia", "dz"],
    ["Argentina", "ar"],
    ["Armênia", "am"],
    ["Austrália", "au"],
    ["Áustria", "at"],
    ["Azerbaijão", "az"],

    ["Bahamas", "bs"],
    ["Bahrein", "bh"],
    ["Bangladesh", "bd"],
    ["Barbados", "bb"],
    ["Belarus", "by"],
    ["Bélgica", "be"],
    ["Belize", "bz"],
    ["Benim", "bj"],
    ["Butão", "bt"],
    ["Bolívia", "bo"],
    ["Bósnia e Herzegovina", "ba"],
    ["Botsuana", "bw"],
    ["Brasil", "br"],
    ["Brunei", "bn"],
    ["Bulgária", "bg"],
    ["Burkina Faso", "bf"],
    ["Burundi", "bi"],

    ["Cabo Verde", "cv"],
    ["Camarões", "cm"],
    ["Camboja", "kh"],
    ["Canadá", "ca"],
    ["Catar", "qa"],
    ["Cazaquistão", "kz"],
    ["Chade", "td"],
    ["Chile", "cl"],
    ["China", "cn"],
    ["Chipre", "cy"],
    ["Colômbia", "co"],
    ["Comores", "km"],
    ["Congo", "cg"],
    ["Coreia do Norte", "kp"],
    ["Coreia do Sul", "kr"],
    ["Costa do Marfim", "ci"],
    ["Costa Rica", "cr"],
    ["Croácia", "hr"],
    ["Cuba", "cu"],

    ["Dinamarca", "dk"],
    ["Djibuti", "dj"],
    ["Dominica", "dm"],

    ["Egito", "eg"],
    ["El Salvador", "sv"],
    ["Emirados Árabes Unidos", "ae"],
    ["Equador", "ec"],
    ["Eritreia", "er"],
    ["Eslováquia", "sk"],
    ["Eslovênia", "si"],
    ["Espanha", "es"],
    ["Estados Unidos", "us"],
    ["Estônia", "ee"],
    ["Eswatini", "sz"],
    ["Etiópia", "et"],

    ["Fiji", "fj"],
    ["Filipinas", "ph"],
    ["Finlândia", "fi"],
    ["França", "fr"],

    ["Gabão", "ga"],
    ["Gâmbia", "gm"],
    ["Gana", "gh"],
    ["Geórgia", "ge"],
    ["Granada", "gd"],
    ["Grécia", "gr"],
    ["Guatemala", "gt"],
    ["Guiana", "gy"],
    ["Guiné", "gn"],
    ["Guiné-Bissau", "gw"],
    ["Guiné Equatorial", "gq"],

    ["Haiti", "ht"],
    ["Honduras", "hn"],
    ["Hungria", "hu"],

    ["Iêmen", "ye"],
    ["Ilhas Marshall", "mh"],
    ["Ilhas Salomão", "sb"],
    ["Índia", "in"],
    ["Indonésia", "id"],
    ["Irã", "ir"],
    ["Iraque", "iq"],
    ["Irlanda", "ie"],
    ["Islândia", "is"],
    ["Israel", "il"],
    ["Itália", "it"],

    ["Jamaica", "jm"],
    ["Japão", "jp"],
    ["Jordânia", "jo"],

    ["Kiribati", "ki"],
    ["Kuwait", "kw"],

    ["Laos", "la"],
    ["Lesoto", "ls"],
    ["Letônia", "lv"],
    ["Líbano", "lb"],
    ["Libéria", "lr"],
    ["Líbia", "ly"],
    ["Liechtenstein", "li"],
    ["Lituânia", "lt"],
    ["Luxemburgo", "lu"],

    ["Macedônia do Norte", "mk"],
    ["Madagascar", "mg"],
    ["Malásia", "my"],
    ["Malaui", "mw"],
    ["Maldivas", "mv"],
    ["Mali", "ml"],
    ["Malta", "mt"],
    ["Marrocos", "ma"],
    ["Maurício", "mu"],
    ["Mauritânia", "mr"],
    ["México", "mx"],
    ["Micronésia", "fm"],
    ["Moçambique", "mz"],
    ["Moldávia", "md"],
    ["Mônaco", "mc"],
    ["Mongólia", "mn"],
    ["Montenegro", "me"],
    ["Myanmar", "mm"],

    ["Namíbia", "na"],
    ["Nauru", "nr"],
    ["Nepal", "np"],
    ["Nicarágua", "ni"],
    ["Níger", "ne"],
    ["Nigéria", "ng"],
    ["Noruega", "no"],
    ["Nova Zelândia", "nz"],

    ["Omã", "om"],

    ["Países Baixos", "nl"],
    ["Palau", "pw"],
    ["Palestina", "ps"],
    ["Panamá", "pa"],
    ["Papua-Nova Guiné", "pg"],
    ["Paquistão", "pk"],
    ["Paraguai", "py"],
    ["Peru", "pe"],
    ["Polônia", "pl"],
    ["Portugal", "pt"],

    ["Quênia", "ke"],
    ["Quirguistão", "kg"],

    ["Reino Unido", "gb"],
    ["República Centro-Africana", "cf"],
    ["República Democrática do Congo", "cd"],
    ["República Dominicana", "do"],
    ["República Tcheca", "cz"],
    ["Romênia", "ro"],
    ["Ruanda", "rw"],
    ["Rússia", "ru"],

    ["Samoa", "ws"],
    ["San Marino", "sm"],
    ["Santa Lúcia", "lc"],
    ["São Cristóvão e Névis", "kn"],
    ["São Tomé e Príncipe", "st"],
    ["São Vicente e Granadinas", "vc"],
    ["Senegal", "sn"],
    ["Serra Leoa", "sl"],
    ["Sérvia", "rs"],
    ["Seicheles", "sc"],
    ["Singapura", "sg"],
    ["Síria", "sy"],
    ["Somália", "so"],
    ["Sri Lanka", "lk"],
    ["Sudão", "sd"],
    ["Sudão do Sul", "ss"],
    ["Suécia", "se"],
    ["Suíça", "ch"],
    ["Suriname", "sr"],

    ["Tailândia", "th"],
    ["Tajiquistão", "tj"],
    ["Tanzânia", "tz"],
    ["Timor-Leste", "tl"],
    ["Togo", "tg"],
    ["Tonga", "to"],
    ["Trinidad e Tobago", "tt"],
    ["Tunísia", "tn"],
    ["Turcomenistão", "tm"],
    ["Turquia", "tr"],
    ["Tuvalu", "tv"],

    ["Ucrânia", "ua"],
    ["Uganda", "ug"],
    ["Uruguai", "uy"],
    ["Uzbequistão", "uz"],

    ["Vanuatu", "vu"],
    ["Vaticano", "va"],
    ["Venezuela", "ve"],
    ["Vietnã", "vn"],

    ["Zâmbia", "zm"],
    ["Zimbábue", "zw"]
];

/*
=========================================================
CONFIGURAÇÃO DOS NÍVEIS
=========================================================
*/
const levels = {
    easy: {
        name: "Fácil",
        time: 15,
        points: 10,
        lives: 5
    },
    medium: {
        name: "Médio",
        time: 10,
        points: 20,
        lives: 5
    },
    hard: {
        name: "Difícil",
        time: 5,
        points: 35,
        lives: 5
    }
};

/*
=========================================================
ESTADO DO JOGO
=========================================================
*/
let difficulty = "easy";
let score = 0;
let lives = levels.easy.lives;
let streak = 0;
let currentCountry = null;
let usedCountries = [];
let timeLeft = 0;
let timer = null;
let gameActive = false;
let hintUsed = false;
let bestScore = Number(localStorage.getItem("flagBestScore")) || 0;

/*
=========================================================
ELEMENTOS HTML
=========================================================
*/
const startScreen = document.getElementById("startScreen");
const game = document.getElementById("game");
const gameOver = document.getElementById("gameOver");
const flag = document.getElementById("flag");
const answer = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const streakElement = document.getElementById("streak");
const bestElement = document.getElementById("best");
const timerBar = document.getElementById("timerBar");
const progress = document.getElementById("progress");

/*
=========================================================
NORMALIZAÇÃO
=========================================================
*/
function normalize(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");
}

/*
=========================================================
INICIAR
=========================================================
*/
function startGame() {
    score = 0;
    streak = 0;
    lives = levels[difficulty].lives;
    usedCountries = [];
    gameActive = true;
    startScreen.style.display = "none";
    game.style.display = "block";
    gameOver.style.display = "none";

    updateStats();
    nextQuestion();
}

/*
=========================================================
PRÓXIMA QUESTÃO
=========================================================
*/
function nextQuestion() {
    clearInterval(timer);
    if (usedCountries.length >= countries.length) {
        usedCountries = [];
    }

    const available = countries.filter((_, index) =>
                !usedCountries.includes(index)
        );
    const randomIndex = Math.floor(Math.random() * available.length);
    currentCountry = available[randomIndex];

    const originalIndex = countries.indexOf(currentCountry);
    usedCountries.push(originalIndex);

    hintUsed = false;
    flag.src = `https://flagcdn.com/w640/${currentCountry[1]}.png`;
    flag.alt = `Bandeira de ${currentCountry[0]}`;

    answer.value = "";
    feedback.textContent = "";
    feedback.className = "feedback";
    progress.textContent = `Bandeira ${usedCountries.length} de ${countries.length}`;

    startTimer();
    answer.focus();

}

/*
=========================================================
CRONÔMETRO
=========================================================
*/
function startTimer() {

    timeLeft = levels[difficulty].time;
    updateTimer();

    timer = setInterval(() => {
        timeLeft -= 0.1;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeOut();
        }
    }, 100);
}

function updateTimer() {
    const percentage = (timeLeft / levels[difficulty].time) * 100;
    timerBar.style.width = Math.max(0, percentage) + "%";

    if (percentage > 50) {
        timerBar.style.background = "#4ade80";
    }

    else if (percentage > 25) {
        timerBar.style.background = "#facc15";
    }
    else {
        timerBar.style.background = "#fb7185";
    }
}

/*
=========================================================
RESPOSTA
=========================================================
*/
function checkAnswer() {
    if (!gameActive) return;
    const userAnswer = normalize(answer.value);

    if (!userAnswer) return;
    const correctAnswer = normalize(currentCountry[0]);

    clearInterval(timer);

    if (userAnswer === correctAnswer) {
        correct();
    }
    else {
        wrong();
    }
}

/*
=========================================================
ACERTO
=========================================================
*/
function correct() {
    streak++;
    const basePoints = levels[difficulty].points;
    const streakBonus = Math.min(streak - 1, 10) * 2;
    const timeBonus = Math.ceil(timeLeft);
    let earned = basePoints + streakBonus + timeBonus;

    if (hintUsed) {
        earned = Math.floor(earned * 0.5);
    }
    score += earned;
    feedback.textContent = `✅ Correto! +${earned} pontos`;
    feedback.className = "feedback correct";

    updateStats();
    setTimeout(() => {
        nextQuestion();
    }, 900);
}

/*
=========================================================
ERRO
=========================================================
*/
function wrong() {
    lives--;
    streak = 0;
    feedback.innerHTML = `❌ Incorreto! A resposta era <strong>${currentCountry[0]}</strong>`;
    feedback.className = "feedback wrong";
    updateStats();

    if (lives <= 0) {
        setTimeout(gameOverScreen, 1000);
    }
    else {
        setTimeout(nextQuestion, 1300);
    }
}

/*
=========================================================
TEMPO ESGOTADO
=========================================================
*/
function timeOut() {
    lives--;
    streak = 0;
    feedback.innerHTML = `⏰ Tempo esgotado! Era <strong>${currentCountry[0]}</strong>`;
    feedback.className = "feedback wrong";
    updateStats();

    if (lives <= 0) {
        setTimeout(gameOverScreen, 1000);
    }
    else {
        setTimeout(nextQuestion, 1300);
    }
}

/*
=========================================================
DICA
=========================================================
*/
function giveHint() {
    if (!gameActive || hintUsed) return;

    hintUsed = true;
    const name = currentCountry[0];
    const firstLetter = name.charAt(0);
    feedback.textContent = `💡 Dica: começa com "${firstLetter}" e tem ${name.length} caracteres.`;
    feedback.className = "feedback hint";
}

/*
=========================================================
PULAR
=========================================================
*/
function skipQuestion() {
    if (!gameActive) return;
    clearInterval(timer);
    streak = 0;
    lives--;

    feedback.innerHTML = `⏭️ Pulado! Era <strong>${currentCountry[0]}</strong>`;
    feedback.className = "feedback wrong";
    updateStats();

    if (lives <= 0) {
        setTimeout(gameOverScreen, 900);
    }
    else {
        setTimeout(nextQuestion, 900);
    }
}

/*
=========================================================
DIFICULDADE
=========================================================
*/
function setDifficulty(level) {
    difficulty = level;
    document.querySelectorAll(".difficulty button").forEach(button => {
            button.classList.toggle("active", button.dataset.level === level);
        });

    if (gameActive) {
        restartGame();
    }
}

/*
=========================================================
ESTATÍSTICAS
=========================================================
*/
function updateStats() {
    scoreElement.textContent = score;
    livesElement.textContent = "❤️".repeat(Math.max(0, lives));
    streakElement.textContent = streak;
    bestElement.textContent = bestScore;
}

/*
=========================================================
FIM DE JOGO
=========================================================
*/
function gameOverScreen() {
    clearInterval(timer);

    gameActive = false;
    game.style.display = "none";
    gameOver.style.display = "block";
    document.getElementById("finalScore").textContent = score;

    let message;

    if (score >= 1000) {
        message = "🏆 Excelente! Você é um mestre das bandeiras!";
    }

    else if (score >= 500) {
        message = "🌟 Muito bom! Você conhece muitas bandeiras.";
    }

    else if (score >= 200) {
        message = "👏 Bom trabalho! Continue treinando.";
    }

    else {
        message = "📚 Continue praticando e você vai melhorar!";
    }
    document.getElementById("finalMessage").textContent = message;

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("flagBestScore",bestScore);
        document.getElementById("finalMessage").innerHTML += "<br><br>🎉 <strong>Novo recorde!</strong>";
    }
    updateStats();
}

/*
=========================================================
REINICIAR
=========================================================
*/
function restartGame() {
    clearInterval(timer);
    startGame();
}

/*
=========================================================
ENTER
=========================================================
*/
answer.addEventListener("keydown",function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    }
);

/*
=========================================================
CONFIGURAÇÃO INICIAL
=========================================================
*/
game.style.display = "none";
gameOver.style.display = "none";
startScreen.style.display = "block";

difficulty = "easy";

document.querySelector('[data-level="easy"]').classList.add("active");
bestElement.textContent = bestScore;