const userNameEl = document.getElementById('userName');
const userScoreEl = document.getElementById('userScore');
const compScoreEl = document.getElementById('compScore');
const userNumEl = document.getElementById('userNum');
const compNumEl = document.getElementById('compNum');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const log = document.getElementById('log');
let userScore = 0;
let compScore = 0;
let playerName = '';
function getRandom() {
    return Math.floor(Math.random() * 100) + 1;
}
function addLog(message) {
    const p = document.createElement('p');
    p.textContent = message;
    log.prepend(p);
}
startBtn.addEventListener('click', () => {
    playerName = prompt("Введіть ваше ім'я:");
    if (!playerName || playerName.trim() === '') {
        alert("Ім'я не може бути порожнім!");
        return;
    }
    userNameEl.textContent = playerName;
    userScore = 0;
    compScore = 0;
    userScoreEl.textContent = 0;
    compScoreEl.textContent = 0;
    log.innerHTML = '';
    startBtn.disabled = true;
    nextBtn.disabled = false;
    resetBtn.disabled = false;
    addLog(`Гра почалась! Удачі, ${playerName}!`);
});
nextBtn.addEventListener('click', () => {
    const userNum = getRandom();
    const compNum = getRandom();
    userNumEl.textContent = userNum;
    compNumEl.textContent = compNum;
    if (userNum > compNum) {
        userScore++;
        addLog(`${playerName} виграв цей раунд! (${userNum} > ${compNum})`);
    } else if (compNum > userNum) {
        compScore++;
        addLog(`Комп’ютер виграв цей раунд! (${compNum} > ${userNum})`);
    } else {
        addLog(`Нічия (${userNum} = ${compNum})`);
    }
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
    if (userScore === 3 || compScore === 3) {
        const winner = userScore === 3 ? playerName : 'Комп’ютер';
        addLog(`🏆 Переможець гри — ${winner}!`);
        nextBtn.disabled = true;
        startBtn.disabled = false;
    }
});
resetBtn.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    userNumEl.textContent = '-';
    compNumEl.textContent = '-';
    userScoreEl.textContent = 0;
    compScoreEl.textContent = 0;
    log.innerHTML = '';
    startBtn.disabled = false;
    nextBtn.disabled = true;
    resetBtn.disabled = true;
    userNameEl.textContent = '-';
});
