let searchBox = document.querySelector("input");
let searchBtn = document.querySelector("button");

async function clickWeather(city){
    const response =await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q="+ city +"&appid=f112ffd524d1f7938ad75467818c715f")
    const data =await response.json()
    document.querySelector(".country").innerHTML += data.sys.country;
    document.querySelector(".city").innerHTML += data.name;
    document.querySelector(".temp").innerHTML += Math.floor(data.main.temp) + "<sup>o</sup>c";
}

searchBtn.addEventListener("click",()=>{
    clickWeather(searchBox.value)
})