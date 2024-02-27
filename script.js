const txtInput = document.querySelector('.txt-input');
const totalChar = document.querySelector('.total-char');
const charLimit = document.querySelector('.char-limit');
const wordCount = document.querySelector('.word-count');
const charLimitAlert = document.querySelector('.char-limit-alert');

const inputLimit = document.querySelector('.input-limit');
const limitBtn = document.querySelector('.limit-btn');

let number_of_characters;

limitBtn.addEventListener('click', () => {
    data = Number(inputLimit.value);
    number_of_characters = data;
    if (number_of_characters > 0) {
        charLimit.innerHTML = `/${number_of_characters}`;
        charLimit.style.opacity = '1';
    }
})

txtInput.addEventListener('keyup', function () {
    const charCount = txtInput.value.length;
    totalChar.innerHTML = charCount;

    const allWord = txtInput.value.match(/[\w\d'\'-]+/gi);
    const totalWord = allWord.length;
    wordCount.innerHTML = `No. of word: ${totalWord}`;
    txtInput.setAttribute('maxlength', number_of_characters);
    const maxLength = (txtInput.getAttribute("maxlength"));
    if (maxLength !== 'undefined') {
        maxLength - charCount <= 10 ? totalChar.style.color = '#FF8A73' : '';
        maxLength == charCount ? charLimitAlert.style.display = 'block' : 'none';
    }
})