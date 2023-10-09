const url = 'https://api.openweathermap.org/data/2.5/'
const key = '2ea9f0dc2687dd0d8a0bf470a2ac9d26'

const setQuery = (e) =>{
    if(e.keyCode == '13') {
    getResult(searchBar.value)
    }
};

 const getResult = (cityName) => {
   let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
   fetch(query)
   .then(weather => {
    return weather.json();
   })
   .then(displayResult)
   .catch(error => console.error('Hava durumu alınamadı:', error));
 };

 const displayResult= (result) => {
    //console.log(result);
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;
 };

const searchBar  = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);