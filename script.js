const answers = document.querySelectorAll('#answer-box');

answers.forEach(answer => {
    answer.addEventListener('click', function() {
        const isCorrect = this.getAttribute('data-answer');
        if(isCorrect === 'correct'){
            window.location.href = 'correct.html'
        }else{
            window.location.href = 'wrong.html'
        }
    })
})