let generateButton = document.getElementById('generate')
generateButton.addEventListener('click', function () {
    let randomValues = (Math.random() * 10000)
    let abc = parseInt(randomValues.toFixed())
    document.getElementById('generated-view').value = abc

})
let screen = document.getElementById('cal-view')
let allButtons = document.getElementsByClassName('button')
let screenValue = ' '
for (items of allButtons) {
    items.addEventListener('click', (e) => {
        let targetButton = e.target.innerText
        if (targetButton == 'C') {
            screenValue = ' '
            screen.value = screenValue
        }
        else {
            screenValue += targetButton
            screen.value = screenValue
        }
    })
}
let submit = document.getElementById('sbmt')
submit.addEventListener('click', function () {
    if (parseInt(document.getElementById('generated-view').value) == parseInt(document.getElementById('cal-view').value)) {
        let match = document.getElementById('match')
        match.style.display = 'block'
    }
    else {
        let notmatch = document.getElementById('notMatch')
        notmatch.style.display = 'block'
    }

})
let reset = document.getElementById('reset')
reset.addEventListener('click', function () {
    screenValue = ' '
    screen.value = screenValue
    document.getElementById('cal-view').value = " "
})


