const api_key = `2769c94b97a0608b69a41ffee2d70d70`
const getTemp = () => {
    const city = document.getElementById('searchText');
    const cityText=city.value; 
    city.value="";
    document.getElementById('dispay-result').textContent="";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${api_key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayresult(data));
}
const displayresult = data => {
    const dispayResultDiv = document.getElementById('dispay-result');
    const div = document.createElement('div');
    // const temp = parseFloat(data.main.temp-273.15).toFixed(2)
    console.log(data);
    div.innerHTML = `
        <div class="weather-status text-white text-center">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <h1 >${data.name}</h1>
        <h3><span>${data.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
        </div> `
    dispayResultDiv.appendChild(div);

}