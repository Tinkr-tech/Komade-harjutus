console.log("JS töötab!")

const tekstEl = document.querySelector('#tekst')

const words = tekstEl.innerText.split(' ')
console.log('words', words)

const newWords = []
for (const word of words) {
    // kas on koma?
    const isComma = word.includes(',')
    console.log(word, isComma)

    newWords.push(word)
    newWords.push('<input>')
}

tekstEl.innerHTML = newWords.join(' ')
