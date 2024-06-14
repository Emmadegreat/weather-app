alert("meeeeeee");

function getInfo() {
    let search = document.getElementById("search");
    let cityname = document.getElementById("cityName");
    cityname.innerHTML = '..' + search.value + '..';
}
api_key = "e30327de7558d0f9d9642131a79c07a4";

const getWeather = async () => {
    weather.innerHTML = `<p>loading...</p>`
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
        </div>
        <div>
                <br><p>temp: ${data.main.temp} &#8451;</p>
                <p>${data.weather[0].main}</p>
                <p>${data.name}</p>
                <p>${data.weather[0].description}</p>

            </div>

    `
    }
}


/*let weather = {
    api_key ="e30327de7558d0f9d9642131a79c07a4",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&units=metric&appid=" + api_key
        )
            .then((response) => response.json())
            .then((data).this.displayWeather(data))
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, discription } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, discription, temp, humidity, speed);
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = discription;
        document.querySelector(".temp").innerText = temp + "deg.cel";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed " + speed + "km/hr";
        document.querySelector(".weather").classList().remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +" ')"
    },
    search: function name() {
        this.fetchWeather(document.querySelector(".search_button").value);
    },

};


document.querySelector(".search_button").addEventListener("click", function () {
    weather.search();

})

document.querySelector(".search_button").addEventListener("keyup", function (event) {
    if (event.key == "enter") {
        weather.search();
    }
});*/