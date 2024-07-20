const weatherDisplay = document.getElementsByTagName("h1")[0]
const cityDisplay = document.getElementsByTagName("h2")[0].getElementsByTagName("span")[0]
const formInput = document.getElementsByTagName("input")[0]

console.log(cityDisplay)

async function getWeather() {
    const city = formInput.value
    const url = `/api?q=${city}`
    
    const res = await fetch(url)
    const data = await res.json()

    if (data.cod != 200) {
        console.error(data.message)
        alert(`Cidade ${city} não existe`)
        return
    }

    let temp = data.main.temp - 273.15

    cityDisplay.innerText = city
    weatherDisplay.innerText = temp.toFixed(2).toString() + "°C"
}