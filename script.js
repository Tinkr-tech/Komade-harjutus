console.log("JS töötab!")

const tekstEl = document.querySelector('#tekst')

const words = tekstEl.innerText.split(' ')
console.log('words', words)

const newWords = []
for (const word of words) {
    newWords.push(word)
    newWords.push('<input>')
}
