const container = document.querySelector('.container')
const input = document.querySelector('input')
const select = document.querySelector('select')


document.addEventListener('DOMContentLoaded',()=>{
    fetch('data.json')
        .then(res => res.json())
        .then((data)=>{
            data.forEach(e => {
                const containerNation = document.createElement('div')
                const divFlag = document.createElement('div')
                const divInfo = document.createElement('div')
                const pName = document.createElement('h3')
                const pPopulation = document.createElement('p')
                const pRegion = document.createElement('p')
                const pCapital = document.createElement('p')
               
                containerNation.classList.add('container-nation','card')
                divFlag.classList.add('flag')
                divInfo.classList.add('info-nation')
                pRegion.classList.add('region')
 
                divFlag.style.backgroundImage = `url(${e.flag})`
                pName.innerHTML = e.name
                pPopulation.innerHTML = `<span>População</span>: ${e.population}`
                pRegion.innerHTML = `<span>Região</span>: ${e.region}` 
                pCapital.innerHTML = `<span>Capital</span>: ${e.capital}`

                containerNation.append(divFlag,divInfo)
                divInfo.append(pName,pPopulation,pRegion,pCapital)
                container.appendChild(containerNation)
               
            }); 
        })
})

input.addEventListener('input',()=>{
    let searchBar = input.value
    let cards = document.querySelectorAll('.card');
    let optionValue = select.value.toLowerCase()

    if (searchBar !='' && optionValue == 'qualquer região') {
        for (let card of cards) {
            let h3 = card.querySelector('h3').textContent.toLowerCase()
            let inputValue = searchBar.toLowerCase()
            
            if (!h3.includes(inputValue)) {
                card.style.display = 'none'
             
            } else {
                card.style.display = 'block'
            }
        }

    } else if(optionValue != 'qualquer região'){
        // quando der o input, ele precisa pesquisr apenas nos que estão com a região igual a que está no option value

        for (let card of cards) {
            let region = card.querySelector('.region').textContent.toLowerCase()
            let h3 = card.querySelector('h3').textContent.toLowerCase()
            let inputValue = searchBar.toLowerCase()
            
            if (optionValue == region && h3.includes(inputValue)) {
                card.style.display = 'block'
            } else{
                card.style.display = 'none'   
            }
        }
    } else{
        for (const card of cards) {
            card.style.display = 'block'
        }
    }
})

select.addEventListener('change',()=>{
    let optionValue = select.value.toLowerCase()
    let cards = document.querySelectorAll('.card')

    for (let card of cards) {
        let region = card.querySelector('.region').textContent.toLowerCase()
        if (optionValue !== 'qualquer região') {
            if (optionValue === region) {
                card.style.display = 'block'
               
            } else {
                card.style.display = 'none'
            }
        }else {
            card.style.display = 'block';
        }
    }
})