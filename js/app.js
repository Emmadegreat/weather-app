const api_key = `e30327de7558d0f9d9642131a79c07a4`
const form = document.querySelector("form")
let search = document.querySelector("#search")
const weather = document.querySelector("#weather")
let a = new Date();
document.getElementById("date").innerHTML = a;
document.getElementById("year").innerHTML = new Date().getFullYear();


const getWeather = async(search) => {
    weather.innerHTML = `<p>Loading...</p>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    if (data.cod == 404) {
        weather.innerHTML = `<p>Location not found</p>`


    } else {



    weather.innerHTML = `
        <div>
             <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" id="cloud__img">
        </div><br><br>
        <div>
                <br><p>Temp: ${data.main.temp} &#8451;</p>
                <p>weather condition: ${data.weather[0].main}</p>
                <p>Location: ${data.name}</p>
                <p>Discription: ${data.weather[0].description}</p>


    `
        /*let a = new Date();
        document.getElementById("city").innerHTML = a;*/
    }
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value);
        event.preventDefault();

    }
)