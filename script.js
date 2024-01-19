const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answerArr = ['Tak!', 'Nie', 'Może...', 'Ciężko powiedzieć...', 'Nie chcę znać odpowiedz na to pytanie!'];

const shakeBall = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = ''
        ball.classList.remove('shake-animation')
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi byc zakończone znakiem "?".'
        answer.textContent = ''
        ball.classList.remove('shake-animation')
    } else {
        error.textContent = 'Musisz zadać jakieś pytanie!'
        answer.textContent = ''
        ball.classList.remove('shake-animation')
    }
}

const generateAnswer = () => {

    const number = Math.floor(Math.random() * 5)
    answer.innerHTML = `<span>Odpowidz:</span> ${answerArr[number]}`
}

ball.addEventListener('click', generateAnswer);