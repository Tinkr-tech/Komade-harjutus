console.log("JS töötab!")

const tekstEl = document.querySelector('#tekst')

const words = tekstEl.innerText.split(' ')
console.log('words', words)

const newWords = []
for (const word of words) {
    // kas on koma?
    const isComma = word.includes(',')

    newWords.push(word.replace(',', ''))
    newWords.push('<input data-comma="' + isComma + '">')
}

tekstEl.innerHTML = newWords.join(' ')

const kontrolliBtn = document.querySelector('button#kontrolli')
kontrolliBtn.onclick = function (event) {
    const allInputs = document.querySelectorAll('input')
    let punktid = 0
    for (const input of allInputs) {
        const expectedComma = input.getAttribute('data-comma') === 'true'
        const actualComma = input.value === ','
        if (expectedComma !== actualComma) {
            input.classList.add('incorrect')
            input.classList.remove('correct')
        } else {
            input.classList.remove('incorrect')
        }
        if (expectedComma && actualComma) {
            punktid += 1
            input.classList.add('correct')
        } else if (!expectedComma && actualComma) {
            punktid -= 1
        }
    }
    const maksPunkte = document.querySelectorAll('input[data-comma="true"]').length
    document.querySelector('#punktid').innerText = punktid
    const hinne = Math.round(punktid / maksPunkte * 100)
    document.querySelector('#hinne').innerText = hinne + '%'
}
