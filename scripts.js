let calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function () {
    console.log('clicked')
    let lentIlgis = document.getElementById('lentosIlgis').valueAsNumber
    let lentPlotis = document.getElementById('lentosPlotis').valueAsNumber
    let lentGylis = document.getElementById('lentosGylis').valueAsNumber
    let uzsakymuKiekis = document.getElementById('lentuKiekis').valueAsNumber
    let kuboKaina = 250

    let lentosTuris = ((lentIlgis * lentPlotis * lentGylis)/1000000).toFixed(2)
    let kubatura = lentosTuris * uzsakymuKiekis
    let kainaViso = (kubatura * kuboKaina).toFixed(2)



    let results = document.getElementById('results')
    results.innerHTML = `<p><strong>Užsakomas medienos kiekis:</strong> ${kubatura} kubiniai metrai</p>`
    results.innerHTML += `<p><strong>Užsakymo kaina:</strong> ${kainaViso} €</p>`
})


document.getElementById('lentosIlgis').addEventListener('keyup', function (event) {
    let inputValue = event.target.valueAsNumber
    if (inputValue <= 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})



document.getElementById('lentosPlotis').addEventListener('keyup', function (event) {
    let inputValue = event.target.valueAsNumber
    if (inputValue <= 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})


document.getElementById('lentosGylis').addEventListener('keyup', function (event) {
    let inputValue = event.target.valueAsNumber
    if (inputValue <= 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('lentuKiekis').addEventListener('keyup', function (event) {
    let inputValue = event.target.valueAsNumber
    if (inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})


document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('lentosIlgis').valueAsNumber = 0
    document.getElementById('lentosPlotis').valueAsNumber = 0
    document.getElementById('lentosGylis').valueAsNumber = 0
    document.getElementById('lentuKiekis').valueAsNumber = 0
    document.getElementById('results').innerHTML = '<p>Įveskite užsakymo duomenis.</p>'
})
