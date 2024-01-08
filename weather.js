const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weather_box = document.querySelector('.weather-box');
const details = document.querySelector('.details');
const error404= document.querySelector('.not-found');
search.addEventListener('click', () => {
    const APIKey = '13e36bab8f036feb21f2b81f44fbff21';
    const city = document.querySelector('input').value;

    if(city=="")
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        
        if(json.cod == '404'){
            container.style.height = '500px';
            weather_box.classList.remove('active');
            details.classList.remove('active');
            error404.classList.add('active');
            return;
        }
            container.style.height = '500px';
            weather_box.classList.add('active');
            details.classList.add('active');
            error404.classList.remove('active');

        const image = document.querySelector('.weather img');
        const temp = document.querySelector('.temp');
        const desc = document.querySelector('.desc');
        const humidity = document.querySelector('.humidity span');
        const wind = document.querySelector('.wind span');

        switch(json.weather[0].main) {
            case 'Clear':
                image.src = 'clear.png';
                break;
            case 'Rain':
                image.src = 'rain.png';
                break;
            case 'Drizzle':
                image.src = 'rain.png';
                break;
            case 'Snow':
                image.src = 'snow.png';
                break;
            case 'Clouds':
                image.src = 'cloud.png';
                break;
            case 'Mist':
                image.src = 'mist.png';
                break;
            case 'Haze':
                image.src = 'mist.png';
                break;
        
            default:
                image.src = 'cloud.png';
        }
        temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        desc.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${json.wind.speed}Km/h`;
    })
});
