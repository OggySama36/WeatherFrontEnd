const menu = document.querySelector('.menu');
const menuBar = document.querySelector('.menuBar');
const listBox = document.querySelector('.listNation');
const boxNation = document.querySelector('.boxNation');
const search = document.querySelector('.search');
const optionsNation = document.querySelectorAll('[role = "optionNation"]');
const optionsCity = document.querySelectorAll('[role="optionCity"]');
const boxCity = document.querySelector('.boxCity');
const listCity = document.querySelector('.listCity');
const find = document.querySelector('.find');
const dateandtime = document.querySelector('.dateandtime');
const area = document.querySelector('.area');
const home = document.querySelector('.SlideIn');
const chartForTemp = document.querySelector('.chartForTemp');
const boxForInfomation = document.querySelector('.boxForInfomation');
const penTemp = chartForTemp.getContext('2d');
const SlideIn2 = document.querySelector('.SlideIn2');
const chartForTempMax = document.querySelector('.chartForTempMax');
const chartForClouds = document.querySelector('.chartForClouds');
const penTempMax = chartForTempMax.getContext('2d');
const penClouds = chartForClouds.getContext('2d');
const tempMinCheck = document.querySelector('.tempMinCheck');
const tempMaxCheck = document.querySelector('.tempMaxCheck');
const cloudsCheck = document.querySelector('.cloudsCheck');
const penTypeMinChart = chartForTemp.getContext('2d');
const penTypeMaxChart = chartForTempMax.getContext('2d');
const penTypeCloudsChart = chartForClouds.getContext('2d');
const today = document.querySelector('.today');
const about = document.querySelector('.about');
const login = document.getElementById('login');
const personal = document.getElementById('personal');
const personalInfo = document.querySelector('.personalInfo');
const deleteAcc = document.querySelector('.deleteAcc');
const deleteWarning = document.querySelector('.deleteWarning');
const acceptDel = document.querySelector('.yes');
const refuseDel = document.querySelector('.no');
const send = document.getElementById('send');
const feedback = document.getElementById('feedback');
const boxfather_feedback = document.querySelector('.boxfather_feedback');
const exitFeedback = document.querySelector('.exitFeedback');

const info_username = document.querySelector('.info_username');
const info_email = document.querySelector('.info_email');
const info_telephone = document.querySelector('.info_telephone');
const info_savedcity = document.querySelector('.info_savedcity');
const exit = document.querySelector('.exit');
const logout = document.querySelector('.logout');

const day1 = document.querySelector('.day1');
const day2 = document.querySelector('.day2');
const day3 = document.querySelector('.day3');
const day4 = document.querySelector('.day4');
const day5 = document.querySelector('.day5');


let countryCode = "";
let cityCode = "";
let tempMaxInDay = document.querySelector('.tempMaxInDay');
let tempMinInDay = document.querySelector('.tempMinInDay');
let tempAverage = document.querySelector('.tempAverageInDay');
let pressure = document.querySelector('.pressure');

let tempMinTable = document.querySelector('.tempMinTable');
let tempMaxTable = document.querySelector('.tempMaxTable');
let cloudsTable = document.querySelector('.cloudsTable');
const timeByDay = {}
menu.addEventListener('click', () => {
    let menuBarDisplay = getComputedStyle(menuBar).opacity;
    if (menuBarDisplay == "0"){
        menuBar.style.transform = "translateX(0px)";
        menuBar.style.opacity = "1";
        menu.style.transform = "translateX(255px)";
    }
    else {
        menuBar.style.transform = "translateX(-100vw)";
        menuBar.style.opacity = "0";
        menu.style.transform = "translateX(0px)";
    }
});

boxNation.addEventListener('click', () => {
    let listBoxState = getComputedStyle(listBox).opacity;
    if(listBoxState === "0"){
        listBox.style.opacity = 1;
        boxNation.innerHTML = "Choose Your Nation &#9650;";
        listCity.style.opacity = "0";
        boxCity.innerHTML = "Choose Your City &#9660;";
        find.style.pointerEvents = "none";
        find.style.filter = "grayscale(100%) blur(2px)";
        find.style.backgroundColor = "gray";
    }
    else{
        listBox.style.opacity = 0;
        boxNation.innerHTML = "Choose Your Nation &#9660;"
        listCity.style.opacity = "0";
    }
});

optionsNation.forEach(function(option){
    option.addEventListener('click', (e) => {
        boxNation.textContent = option.textContent;
        boxNation.dataset.selected = "true"
        listBox.style.opacity = 0;
        boxCity.style.opacity = 1;
        boxCity.style.filter = "blur(0px)";
        boxCity.style.cursor = "pointer";
        countryCode = e.target.dataset.country;
        boxCity.innerHTML = "Choose Your City &#9660;";
        CreateCity();
    });
});

listCity.addEventListener('click', function(e) {
        boxCity.textContent = e.target.textContent;
        listCity.style.opacity = 0;
        cityCode = e.target.textContent;
        find.style.pointerEvents = "auto";
        find.style.filter = "grayscale(0%) blur(0px)";
        find.style.backgroundColor = "pink";
});


boxCity.addEventListener('click', () => {
    const listCityState = getComputedStyle(listCity).opacity;
    if (boxNation.dataset.selected === "false"){
        alert('Please choose your nation first');
        return;
    }

    if (boxNation.dataset.selected === "true" && listCityState === "0") {
        listCity.style.opacity = "1";
        boxCity.innerHTML = "Choose Your City &#9650;";
    }

    if (boxNation.dataset.selected === "true" && listCityState === "1"){
        listCity.style.opacity = "0";
        boxCity.innerHTML = "Choose Your City &#9660;";
    }
});

const bigCities = {
  "Argentina": ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "La Plata"],
  "Australia": ["Canberra", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  "Bermuda": ["Hamilton"],
  "Brazil": ["Brasilia", "Sao Paulo", "Rio de Janeiro", "Salvador", "Fortaleza"],
  "Brunei": ["Bandar Seri Begawan"],
  "Bulgaria": ["Sofia", "Plovdiv", "Varna", "Burgas"],
  "Cambodia": ["Phnom Penh", "Siem Reap", "Sihanoukville"],
  "Canada": ["Ottawa", "Toronto", "Vancouver", "Montreal", "Calgary"],
  "China": ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu"],
  "Colombia": ["Bogota", "Medellin", "Cali", "Cartagena"],
  "Croatia": ["Zagreb", "Split", "Dubrovnik", "Rijeka"],
  "Czech Republic": ["Prague", "Brno", "Ostrava"],
  "Egypt": ["Cairo", "Alexandria", "Giza"],
  "Finland": ["Helsinki", "Tampere", "Turku"],
  "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
  "Germany": ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
  "Greece": ["Athens", "Thessaloniki"],
  "India": ["New Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"],
  "Indonesia": ["Jakarta", "Surabaya", "Bandung", "Medan", "Denpasar"],
  "Iraq": ["Baghdad", "Basra", "Mosul"],
  "Ireland": ["Dublin", "Cork", "Galway"],
  "Israel": ["Jerusalem", "Tel Aviv", "Haifa"],
  "Japan": ["Tokyo", "Osaka", "Kyoto", "Nagoya", "Sapporo"],
  "Jordan": ["Amman", "Aqaba"],
  "Kazakhstan": ["Astana", "Almaty"],
  "Laos": ["Vientiane", "Luang Prabang"],
  "Madagascar": ["Antananarivo"],
  "Malaysia": ["Kuala Lumpur", "George Town", "Johor Bahru", "Kota Kinabalu"],
  "Malta": ["Valletta"],
  "Macao": ["Macao"],
  "Mexico": ["Mexico City", "Guadalajara", "Monterrey"],
  "Mongolia": ["Ulaanbaatar"],
  "Myanmar": ["Naypyidaw", "Yangon", "Mandalay"],
  "Nepal": ["Kathmandu"],
  "Netherlands": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
  "New Zealand": ["Wellington", "Auckland", "Christchurch"],
  "Norway": ["Oslo", "Bergen"],
  "Pakistan": ["Islamabad", "Karachi", "Lahore"],
  "Peru": ["Lima", "Cusco"],
  "Philippines": ["Manila", "Cebu", "Davao"],
  "Poland": ["Warsaw", "Krakow", "Gdansk"],
  "Portugal": ["Lisbon", "Porto"],
  "Qatar": ["Doha"],
  "Romania": ["Bucharest", "Cluj-Napoca"],
  "Singapore": ["Singapore"],
  "South Africa": ["Pretoria", "Cape Town", "Johannesburg"],
  "South Korea": ["Seoul", "Busan", "Incheon"],
  "Spain": ["Madrid", "Barcelona", "Valencia"],
  "Sweden": ["Stockholm", "Gothenburg"],
  "Switzerland": ["Bern", "Zurich", "Geneva"],
  "Taiwan": ["Taipei", "Kaohsiung"],
  "Thailand": ["Bangkok", "Chiang Mai", "Phuket"],
  "Turkey": ["Ankara", "Istanbul", "Izmir"],
  "United Kingdom": ["London", "Manchester", "Birmingham", "Liverpool"],
  "United States": ["Washington", "New York", "Los Angeles", "Chicago", "Houston"],
  "Vietnam": ["Hanoi", "Ho Chi Minh", "Da Nang", "Hai Phong"],
  "Yemen": ["Sanaa", "Aden"],
  "Zambia": ["Lusaka"]
}

const weatherDensityMap = {
  "clear sky": -20,

  "few clouds": -40,
  "scattered clouds": -60,
  "broken clouds": -80,
  "overcast clouds": -100,

  "mist": -120,
  "haze": -140,
  "fog": -160,
  "smoke": -180,

  "light intensity drizzle": -210,
  "drizzle": -220,
  "heavy intensity drizzle": -230,

  "light rain": -250,
  "moderate rain": -270,
  "heavy intensity rain": -290,
  "very heavy rain": -300,
  "extreme rain": -310,
  "freezing rain": -320,

  "light snow": -330,
  "snow": -340,
  "heavy snow": -350,
  "sleet": -360,

  "thunderstorm": -380,
  "thunderstorm with rain": -400,
  "heavy thunderstorm": -410,

  "squall": -420,
  "tornado": -430
};

function CreateCity(){
    listCity.innerHTML = "";
    const nation = boxNation.textContent;
    bigCities[nation].forEach(bigCity => {
        
            const div = document.createElement("div");
            const line = document.createElement("div");
            div.className = "city";
            div.setAttribute("role", "optionCity");
            div.textContent = bigCity;
            line.style.height = "2px";
            line.style.width = "100%";
            line.style.backgroundColor = "black";
        
        listCity.appendChild(div);
        listCity.appendChild(line);
    });
}

let interval;
let forecastRes;
let forecastData;

let date;
let hour;
let dataNeed;
let temp_min;
let temp_max;

let vibeWeather;
const vibeMap = {
  "clear sky": ["minimal", "sunlight", "blue sky", "peaceful"],

  "few clouds": ["soft", "calm", "aesthetic"],
  "scattered clouds": ["aesthetic", "light", "soft sky"],
  "broken clouds": ["dramatic", "moody", "aesthetic"],
  "overcast clouds": ["moody", "dark", "cinematic"],

  "mist": ["soft", "dreamy", "calm"],
  "haze": ["warm", "hazy", "sunlight"],
  "fog": ["foggy", "cinematic", "mysterious"],
  "smoke": ["dark", "smoky", "dramatic"],

  "light intensity drizzle": ["soft rain", "calm", "peaceful"],
  "drizzle": ["light rain", "aesthetic", "calm"],
  "heavy intensity drizzle": ["rainy", "moody", "cinematic"],

  "light rain": ["rainy", "soft", "aesthetic"],
  "moderate rain": ["rainy", "city", "moody"],
  "heavy intensity rain": ["heavy rain", "dramatic", "storm"],
  "very heavy rain": ["storm", "dark", "cinematic"],
  "extreme rain": ["extreme storm", "dark", "dramatic"],
  "freezing rain": ["icy", "winter", "cold"],

  "light snow": ["light snow", "peaceful", "winter"],
  "snow": ["snowfall", "winter", "cinematic"],
  "heavy snow": ["snowstorm", "blizzard", "extreme"],
  "sleet": ["winter rain", "cold", "icy"],

  "thunderstorm": ["lightning", "storm", "dramatic"],
  "thunderstorm with rain": ["lightning rain", "storm", "cinematic"],
  "heavy thunderstorm": ["severe storm", "lightning", "dark"],

  "squall": ["strong wind", "storm", "dramatic"],
  "tornado": ["tornado", "extreme", "apocalyptic"]
};
const API_KEY = "bedba443d1ec69f2b8a48f6d717d2888";
const backgroundKey = "J52cCBv5Fhj5Su2nl0p-i0IewgZFgPbpLUGW__oyeWg";
async function getWeather(){
        if (boxCity.textContent.includes("Choose") || boxNation.textContent.includes("Choose") || find.style.backgroundColor === "gray"){
            alert("Please choose a Nation or a City before!!");
            return;
        }
        else {
            find.classList.add('loading');
            dateandtime.textContent = "";
            area.textContent = "";
            let fiveDays = [];
            let pushed = "";
            clearInterval(interval);
            try{
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityCode},${countryCode}&appid=${API_KEY}&units=metric`)
                find.style.borderRadius = "50%";
                const data = await res.json();
                console.log(data);
                const lat = data.coord.lat;
                const lon = data.coord.lon;
                console.log("Latitude:", lat);
                console.log("Longitude:", lon);

                forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
                forecastData  = await forecastRes.json();
                console.log(forecastData);
                for(let i = 0; i < 40; i++){
                    date = forecastData.list[i].dt_txt;
                    hour = date.split(" ")[1];
                    dataNeed = forecastData.list[i].weather[0].description;
                    temp_min = forecastData.list[i].main.temp_min;
                    temp_max = forecastData.list[i].main.temp_max;
                    console.log(date , dataNeed , " / Temp min: " , temp_min , " / Temp Max: " , temp_max);
                }
                interval = setInterval(() => {
                    const now = new Date();
                    const timezone = forecastData.city.timezone;
                    const unequal = timezone/60/60;
                    const utctime = now.getTime() + now.getTimezoneOffset() * 60000;
                    const localTime = new Date(utctime + timezone * 1000);
                    const localTimeParts = String(localTime).split(" ");
                    dateandtime.innerHTML = `UTC + ${unequal} - ${localTimeParts[0]} ${localTimeParts[1]} ${localTimeParts[2]} ${localTimeParts[3]} ${localTimeParts[4]}`;
                }, 1000);
                const targetNation = boxNation.textContent;
                const targetCity = boxCity.textContent;
                area.innerHTML = `${targetNation} - ${targetCity}`;
                const descForWeather = forecastData.list[0].weather[0].description;
                vibeWeather = vibeMap[descForWeather];
                const randomVibeOfDesc = Math.floor(Math.random() * vibeWeather.length);
                const query = `${descForWeather} ${vibeWeather[randomVibeOfDesc]}`;
                console.log(query);
                backgroundResponse = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${backgroundKey}`);
                backgroundResponseData = await backgroundResponse.json();
                console.log(backgroundResponseData);
                document.body.style.backgroundImage = `url(${backgroundResponseData.urls.regular})`;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
                
                forecastData.list.forEach(item => {
                    const firstMilestone = item.dt_txt.split(" ")[0];
                    if (firstMilestone !== pushed){
                        fiveDays.push(firstMilestone);
                        pushed = firstMilestone;
                    }
                });
                console.log(fiveDays);
                for (let index = 0; index < 5; index++){
                    const fiveDaysParts = fiveDays[index].split("-");
                    const day = document.querySelector(`.day${index + 1}`);
                    day.innerHTML = `${fiveDaysParts[2]}-${fiveDaysParts[1]}-${fiveDaysParts[0]}`;
                }

                fiveDays.forEach(day => {
                    timeByDay[day] = [];
                    forecastData.list.forEach(time =>{
                        if(time.dt_txt.includes(day)){
                            const momment = time.dt_txt.split(" ")[1];
                            timeByDay[day].push(momment);
                        }
                    });
                });

                console.log(timeByDay);

                day1.style.pointerEvents = "auto";
                day2.style.pointerEvents = "auto";
                day3.style.pointerEvents = "auto";
                day4.style.pointerEvents = "auto";
                day5.style.pointerEvents = "auto";

                day1.style.opacity = 1;
                day2.style.opacity = 1;
                day3.style.opacity = 1;
                day4.style.opacity = 1;
                day5.style.opacity = 1;
                
                return forecastData;
            }
            catch(err){
                console.log(err);
            }
            finally{
                find.classList.remove('loading');
                find.style.borderRadius = "10px";
            }
        }
    }

async function getWeatherForMenu() {
            const position = await new Promise((resolve, reject) =>
                navigator.geolocation.getCurrentPosition(resolve, reject)
            );

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            dateandtime.textContent = "";
            area.textContent = "";
            let fiveDays = [];
            let pushed = "";
            clearInterval(interval);

            
            try{
                forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
                forecastData  = await forecastRes.json();
                console.log(forecastData);
                for(let i = 0; i < 40; i++){
                    date = forecastData.list[i].dt_txt;
                    hour = date.split(" ")[1];
                    dataNeed = forecastData.list[i].weather[0].description;
                    temp_min = forecastData.list[i].main.temp_min;
                    temp_max = forecastData.list[i].main.temp_max;
                    console.log(date , dataNeed , " / Temp min: " , temp_min , " / Temp Max: " , temp_max);
            }
            interval = setInterval(() => {
                    const now = new Date();
                    const timezone = forecastData.city.timezone;
                    const unequal = timezone/60/60;
                    const utctime = now.getTime() + now.getTimezoneOffset() * 60000;
                    const localTime = new Date(utctime + timezone * 1000);
                    const localTimeParts = String(localTime).split(" ");
                    dateandtime.innerHTML = `UTC + ${unequal} - ${localTimeParts[0]} ${localTimeParts[1]} ${localTimeParts[2]} ${localTimeParts[3]} ${localTimeParts[4]}`;
            }, 1000);
                
                const descForWeather = forecastData.list[0].weather[0].description;
                vibeWeather = vibeMap[descForWeather];
                const randomVibeOfDesc = Math.floor(Math.random() * vibeWeather.length);
                const query = `${descForWeather} ${vibeWeather[randomVibeOfDesc]}`;
                console.log(query);
                backgroundResponse = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${backgroundKey}`);
                backgroundResponseData = await backgroundResponse.json();
                console.log(backgroundResponseData);
                document.body.style.backgroundImage = `url(${backgroundResponseData.urls.regular})`;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
                
                forecastData.list.forEach(item => {
                    const firstMilestone = item.dt_txt.split(" ")[0];
                    if (firstMilestone !== pushed){
                        fiveDays.push(firstMilestone);
                        pushed = firstMilestone;
                }
            });
                console.log(fiveDays);
                for (let index = 0; index < 5; index++){
                    const fiveDaysParts = fiveDays[index].split("-");
                    const day = document.querySelector(`.day${index + 1}`);
                    day.innerHTML = `${fiveDaysParts[2]}-${fiveDaysParts[1]}-${fiveDaysParts[0]}`;
            }

                fiveDays.forEach(day => {
                    timeByDay[day] = [];
                    forecastData.list.forEach(time =>{
                        if(time.dt_txt.includes(day)){
                            const momment = time.dt_txt.split(" ")[1];
                            timeByDay[day].push(momment);
                    }
                });
            });

            optionsNation.forEach(nation => {
                if (nation.dataset.country === forecastData.city.country){
                    boxNation.textContent = nation.textContent;
                    boxCity.textContent = forecastData.city.name;
                    const targetNation = boxNation.textContent;
                    const targetCity = forecastData.city.name;
                    area.innerHTML = `${targetNation} - ${targetCity}`;
                }
            });
                console.log(timeByDay);
                day1.style.pointerEvents = "auto";
                day1.style.opacity = 1;           
                return forecastData;
        }
        catch(err){
            console.log(err);
        }
        finally{
            find.classList.remove('loading');
            find.style.borderRadius = "10px";
        }
}
find.addEventListener("click", function(){
    getWeather();
});


day1.addEventListener('click', function(){
    const day2Appear = getComputedStyle(day2).opacity;
    const day3Appear = getComputedStyle(day3).opacity;
    const day4Appear = getComputedStyle(day4).opacity;
    const day5Appear = getComputedStyle(day5).opacity;
    if (day2Appear === "0" && day3Appear === "0" && day4Appear === "0" && day5Appear === "0"){
        home.style.opacity = 1;
        home.style.pointerEvents = "auto";
        day1.style.left = "380px";
        day1.style.top = "500px";
        day2.style.opacity = 1;
        day3.style.opacity = 1;
        day4.style.opacity = 1;
        day5.style.opacity = 1;
        SlideIn2.style.opacity = 0;
        SlideIn2.style.zIndex = "-9999";
        SlideIn2.style.pointerEvents = "none";
        day1.style.zIndex = "99999";
        day2.style.zIndex = "99999";
        day3.style.zIndex = "99999";
        day4.style.zIndex = "99999";
        day5.style.zIndex = "99999";
        day1.style.pointerEvents = "auto";
        day2.style.pointerEvents = "auto";
        day3.style.pointerEvents = "auto";
        day4.style.pointerEvents = "auto";
        day5.style.pointerEvents = "auto";
        find.style.pointerEvents = "none";
        find.style.filter = "grayscale(100%) blur(2px)";
        find.style.backgroundColor = "gray";
    }
    else {
        penTypeMinChart.font = "14px Arial";
        penTypeMinChart.fillStyle = "black";
        penTypeMaxChart.font = "14px Arial";
        penTypeMaxChart.fillStyle = "black";
        penTypeCloudsChart.font = "14px Arial";
        penTypeCloudsChart.fillStyle = "black";
        home.style.opacity = 0;
        home.style.zIndex = "-9999";
        SlideIn2.style.opacity = 1;
        SlideIn2.style.zIndex = "9999";
        SlideIn2.style.pointerEvents = "auto";
        home.style.pointerEvents = "none";
        day1.style.left = "50px";
        day1.style.top = "50px";
        day2.style.opacity = 0;
        day3.style.opacity = 0;
        day4.style.opacity = 0;
        day5.style.opacity = 0;
        find.style.pointerEvents = "none";
        find.style.filter = "grayscale(100%) blur(2px)";
        find.style.backgroundColor = "gray";

        day2.style.zIndex = "-99999";
        day3.style.zIndex = "-99999";
        day4.style.zIndex = "-99999";
        day5.style.zIndex = "-99999";
        penTemp.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTempMax.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penClouds.clearRect(0, 0, chartForClouds.width, chartForClouds.height);
        penTypeMinChart.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTypeMaxChart.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penTypeCloudsChart.clearRect(0, 0, chartForClouds.width, chartForClouds.height);
        
        let distanceTime = 50;
        let distanceChart = 50;
        let tempMinYet = 90;
        let tempMaxYet = 0;
        
        Object.keys(timeByDay).forEach(day => {
            const partDay = day.split("-");
            const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
            if (dayreal !== day1.textContent) return;
            timeByDay[day].forEach(time => {
                penTypeMinChart.fillText(time, distanceTime, chartForTemp.height - 20);
                penTypeMaxChart.fillText(time, distanceTime, chartForTempMax.height - 20);
                penTypeCloudsChart.fillText(time, distanceTime, chartForClouds.height - 20);
                distanceTime += 100;
            });
            penTemp.fillStyle = "rgb(0, 54, 107)"; 
            penTempMax.fillStyle = "rgb(147, 0, 0)"; 
            penClouds.fillStyle = "rgb(255, 253, 146)"; 
            forecastData.list.forEach(time => {
                const day = time.dt_txt.split(" ")[0];
                const partDay = day.split("-");
                const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
                if(dayreal === day1.textContent){
                    penTemp.fillRect(distanceChart, chartForTemp.height - 50, 50, -(time.main.temp_min * 8));
                    penTypeMinChart.fillText(time.main.temp_min + "°C", distanceChart, (chartForTemp.height - 50) - (time.main.temp_min * 8) - 10);
                    penTempMax.fillRect(distanceChart, chartForTempMax.height - 50, 50, -(time.main.temp_max * 8));
                    penTypeMaxChart.fillText(time.main.temp_max + "°C", distanceChart, (chartForTempMax.height - 50) - (time.main.temp_max * 8) - 10);
                    const heightOfCloudsChart = weatherDensityMap[time.weather[0].description];
                    if (heightOfCloudsChart !== undefined){
                        penClouds.fillRect(distanceChart, chartForClouds.height - 50, 50, heightOfCloudsChart);
                        penTypeCloudsChart.fillText(time.weather[0].description, distanceChart, (chartForClouds.height - 50) + heightOfCloudsChart - 10);
                    }
                    if (time.main.temp_min < tempMinYet){
                        tempMinYet = time.main.temp_min;
                    }
                    if (time.main.temp_max > tempMaxYet){
                        tempMaxYet = time.main.temp_max;
                    }
                    distanceChart += 100;
                }
            });
        });
        tempMaxInDay.textContent = `Highest temperature in ${day1.textContent}: ${tempMaxYet}°C`;
        tempMinInDay.textContent = `Lowest temperature in ${day1.textContent}: ${tempMinYet}°C`;
        tempAverage.textContent = `Average temperatture in ${day1.textContent}: ${(tempMaxYet + tempMinYet)/2}°C`;
    }
});

day2.addEventListener('click', function(){
    const day1Appear = getComputedStyle(day1).opacity;
    const day3Appear = getComputedStyle(day3).opacity;
    const day4Appear = getComputedStyle(day4).opacity;
    const day5Appear = getComputedStyle(day5).opacity;
    if (day1Appear === "0" && day3Appear === "0" && day4Appear === "0" && day5Appear === "0"){
        home.style.opacity = 1;
        home.style.pointerEvents = "auto";
        day2.style.left = "530px";
        day2.style.top = "500px";
        day1.style.opacity = 1;
        day3.style.opacity = 1;
        day4.style.opacity = 1;
        day5.style.opacity = 1;
        SlideIn2.style.opacity = 0;
        SlideIn2.style.zIndex = "-9999";
        SlideIn2.style.pointerEvents = "none";
        day1.style.zIndex = "99999";
        day2.style.zIndex = "99999";
        day3.style.zIndex = "99999";
        day4.style.zIndex = "99999";
        day5.style.zIndex = "99999";
        day1.style.pointerEvents = "auto";
        day2.style.pointerEvents = "auto";
        day3.style.pointerEvents = "auto";
        day4.style.pointerEvents = "auto";
        day5.style.pointerEvents = "auto";
        find.style.pointerEvents = "none";
        find.style.filter = "grayscale(100%) blur(2px)";
        find.style.backgroundColor = "gray";
    }
    else {
        penTypeMinChart.font = "14px Arial";
        penTypeMinChart.fillStyle = "black";
        penTypeMaxChart.font = "14px Arial";
        penTypeMaxChart.fillStyle = "black";
        penTypeCloudsChart.font = "14px Arial";
        penTypeCloudsChart.fillStyle = "black";
        home.style.opacity = 0;
        home.style.zIndex = "-9999";
        SlideIn2.style.opacity = 1;
        SlideIn2.style.zIndex = "9999";
        SlideIn2.style.pointerEvents = "auto";
        home.style.pointerEvents = "none";
        day2.style.left = "50px";
        day2.style.top = "50px";
        day1.style.opacity = 0;
        day3.style.opacity = 0;
        day4.style.opacity = 0;
        day5.style.opacity = 0;
        day1.style.zIndex = "-99999";
        day3.style.zIndex = "-99999";
        day4.style.zIndex = "-99999";
        day5.style.zIndex = "-99999";
        penTemp.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTempMax.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penClouds.clearRect(0, 0, chartForClouds.width, chartForClouds.height);
        penTypeMinChart.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTypeMaxChart.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penTypeCloudsChart.clearRect(0, 0, chartForClouds.width, chartForClouds.height);

        let distanceTime = 50;
        let distanceChart = 50;
        let tempMinYet = 90;
        let tempMaxYet = 0;
        Object.keys(timeByDay).forEach(day => {
            const partDay = day.split("-");
            const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
            if (dayreal !== day2.textContent) return;
            timeByDay[day].forEach(time => {
                penTypeMinChart.fillText(time, distanceTime, chartForTemp.height - 20);
                penTypeMaxChart.fillText(time, distanceTime, chartForTempMax.height - 20);
                penTypeCloudsChart.fillText(time, distanceTime, chartForClouds.height - 20);
                distanceTime += 100;
            });
            penTemp.fillStyle = "rgb(0, 54, 107)"; 
            penTempMax.fillStyle = "rgb(147, 0, 0)"; 
            penClouds.fillStyle = "rgb(255, 253, 146)"; 
            forecastData.list.forEach(time => {
                const day = time.dt_txt.split(" ")[0];
                const partDay = day.split("-");
                const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
                if(dayreal === day2.textContent){
                    penTemp.fillRect(distanceChart, chartForTemp.height - 50, 50, -(time.main.temp_min * 8));
                    penTemp.fillText(time.main.temp_min + "°C", distanceChart, (chartForTemp.height - 50) - (time.main.temp_min * 8) - 10);
                    penTempMax.fillRect(distanceChart, chartForTempMax.height - 50, 50, -(time.main.temp_max * 8));
                    penTempMax.fillText(time.main.temp_max + "°C", distanceChart, (chartForTempMax.height - 50) - (time.main.temp_max * 8) - 10);
                    const heightOfCloudsChart = weatherDensityMap[time.weather[0].description];
                    if (heightOfCloudsChart !== undefined){
                        penClouds.fillRect(distanceChart, chartForClouds.height - 50, 50, heightOfCloudsChart);
                        penClouds.fillText(time.weather[0].description, distanceChart, (chartForClouds.height - 50) + heightOfCloudsChart - 10);
                    }
                    if (time.main.temp_min < tempMinYet){
                        tempMinYet = time.main.temp_min;
                    }
                    if (time.main.temp_max > tempMaxYet){
                        tempMaxYet = time.main.temp_max;
                    }
                    distanceChart += 100;
                }
            });
        });
        tempMaxInDay.textContent = `Highest temperature in ${day2.textContent}: ${tempMaxYet}°C`;
        tempMinInDay.textContent = `Lowest temperature in ${day2.textContent}: ${tempMinYet}°C`;
        tempAverage.textContent = `Average temperatture in ${day2.textContent}: ${(tempMaxYet + tempMinYet)/2}°C`;
    }
});

day3.addEventListener('click', function(){
    const day2Appear = getComputedStyle(day2).opacity;
    const day1Appear = getComputedStyle(day1).opacity;
    const day4Appear = getComputedStyle(day4).opacity;
    const day5Appear = getComputedStyle(day5).opacity;
    if (day2Appear === "0" && day1Appear === "0" && day4Appear === "0" && day5Appear === "0"){
        home.style.opacity = 1;
        home.style.pointerEvents = "auto";
        day3.style.left = "680px";
        day3.style.top = "500px";
        day2.style.opacity = 1;
        day1.style.opacity = 1;
        day4.style.opacity = 1;
        day5.style.opacity = 1;
        SlideIn2.style.opacity = 0;
        SlideIn2.style.zIndex = "-9999";
        SlideIn2.style.pointerEvents = "none";
        day1.style.zIndex = "99999";
        day2.style.zIndex = "99999";
        day3.style.zIndex = "99999";
        day4.style.zIndex = "99999";
        day5.style.zIndex = "99999";
        day1.style.pointerEvents = "auto";
        day2.style.pointerEvents = "auto";
        day3.style.pointerEvents = "auto";
        day4.style.pointerEvents = "auto";
        day5.style.pointerEvents = "auto";
        find.style.pointerEvents = "none";
        find.style.filter = "grayscale(100%) blur(2px)";
        find.style.backgroundColor = "gray";
    }
    else {
        penTypeMinChart.font = "14px Arial";
        penTypeMinChart.fillStyle = "black";
        penTypeMaxChart.font = "14px Arial";
        penTypeMaxChart.fillStyle = "black";
        penTypeCloudsChart.font = "14px Arial";
        penTypeCloudsChart.fillStyle = "black";
        home.style.opacity = 0;
        home.style.zIndex = "-9999";
        SlideIn2.style.opacity = 1;
        SlideIn2.style.zIndex = "9999";
        SlideIn2.style.pointerEvents = "auto";
        home.style.pointerEvents = "none";
        day3.style.left = "50px";
        day3.style.top = "50px";
        day2.style.opacity = 0;
        day1.style.opacity = 0;
        day4.style.opacity = 0;
        day5.style.opacity = 0;

        day1.style.zIndex = "-99999";
        day2.style.zIndex = "-99999";
        day4.style.zIndex = "-99999";
        day5.style.zIndex = "-99999";
        penTemp.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTempMax.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penClouds.clearRect(0, 0, chartForClouds.width, chartForClouds.height);
        penTypeMinChart.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTypeMaxChart.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penTypeCloudsChart.clearRect(0, 0, chartForClouds.width, chartForClouds.height);

        let distanceTime = 50;
        let distanceChart = 50;
        let tempMinYet = 90;
        let tempMaxYet = 0;
        Object.keys(timeByDay).forEach(day => {
            const partDay = day.split("-");
            const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
            if (dayreal !== day3.textContent) return;
            timeByDay[day].forEach(time => {
                penTypeMinChart.fillText(time, distanceTime, chartForTemp.height - 20);
                penTypeMaxChart.fillText(time, distanceTime, chartForTempMax.height - 20);
                penTypeCloudsChart.fillText(time, distanceTime, chartForClouds.height - 20);
                distanceTime += 100;
            });
            penTemp.fillStyle = "rgb(0, 54, 107)"; 
            penTempMax.fillStyle = "rgb(147, 0, 0)"; 
            penClouds.fillStyle = "rgb(255, 253, 146)"; 
            forecastData.list.forEach(time => {
                const day = time.dt_txt.split(" ")[0];
                const partDay = day.split("-");
                const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
                if(dayreal === day3.textContent){
                    penTemp.fillRect(distanceChart, chartForTemp.height - 50, 50, -(time.main.temp_min * 8));
                    penTemp.fillText(time.main.temp_min + "°C", distanceChart, (chartForTemp.height - 50) - (time.main.temp_min * 8) - 10);
                    penTempMax.fillRect(distanceChart, chartForTempMax.height - 50, 50, -(time.main.temp_max * 8));
                    penTempMax.fillText(time.main.temp_max + "°C", distanceChart, (chartForTempMax.height - 50) - (time.main.temp_max * 8) - 10);
                    const heightOfCloudsChart = weatherDensityMap[time.weather[0].description];
                    if (heightOfCloudsChart !== undefined){
                        penClouds.fillRect(distanceChart, chartForClouds.height - 50, 50, heightOfCloudsChart);
                        penClouds.fillText(time.weather[0].description, distanceChart, (chartForClouds.height - 50) + heightOfCloudsChart - 10);
                    }
                    if (time.main.temp_min < tempMinYet){
                        tempMinYet = time.main.temp_min;
                    }
                    if (time.main.temp_max > tempMaxYet){
                        tempMaxYet = time.main.temp_max;
                    }
                    distanceChart += 100;
                }
            });
        });
        tempMaxInDay.textContent = `Highest temperature in ${day3.textContent}: ${tempMaxYet}°C`;
        tempMinInDay.textContent = `Lowest temperature in ${day3.textContent}: ${tempMinYet}°C`;
        tempAverage.textContent = `Average temperatture in ${day3.textContent}: ${(tempMaxYet + tempMinYet)/2}°C`;
    }
});

day4.addEventListener('click', function(){
    const day2Appear = getComputedStyle(day2).opacity;
    const day3Appear = getComputedStyle(day3).opacity;
    const day1Appear = getComputedStyle(day1).opacity;
    const day5Appear = getComputedStyle(day5).opacity;
    if (day2Appear === "0" && day3Appear === "0" && day1Appear === "0" && day5Appear === "0"){
        home.style.opacity = 1;
        home.style.pointerEvents = "auto";
        day4.style.left = "830px";
        day4.style.top = "500px";
        day2.style.opacity = 1;
        day3.style.opacity = 1;
        day1.style.opacity = 1;
        day5.style.opacity = 1;
        SlideIn2.style.opacity = 0;
        SlideIn2.style.zIndex = "-9999";
        SlideIn2.style.pointerEvents = "none";
        day1.style.zIndex = "99999";
        day2.style.zIndex = "99999";
        day3.style.zIndex = "99999";
        day4.style.zIndex = "99999";
        day5.style.zIndex = "99999";
        day1.style.pointerEvents = "auto";
        day2.style.pointerEvents = "auto";
        day3.style.pointerEvents = "auto";
        day4.style.pointerEvents = "auto";
        day5.style.pointerEvents = "auto";
        find.style.pointerEvents = "none";
        find.style.filter = "grayscale(100%) blur(2px)";
        find.style.backgroundColor = "gray";
    }
    else {
        penTypeMinChart.font = "14px Arial";
        penTypeMinChart.fillStyle = "black";
        penTypeMaxChart.font = "14px Arial";
        penTypeMaxChart.fillStyle = "black";
        penTypeCloudsChart.font = "14px Arial";
        penTypeCloudsChart.fillStyle = "black";
        home.style.opacity = 0;
        home.style.zIndex = "-9999";
        SlideIn2.style.opacity = 1;
        SlideIn2.style.zIndex = "9999";
        SlideIn2.style.pointerEvents = "auto";
        home.style.pointerEvents = "none";
        day4.style.left = "50px";
        day4.style.top = "50px";
        day2.style.opacity = 0;
        day3.style.opacity = 0;
        day1.style.opacity = 0;
        day5.style.opacity = 0;
        day1.style.zIndex = "-99999";
        day3.style.zIndex = "-99999";
        day2.style.zIndex = "-99999";
        day5.style.zIndex = "-99999";
        penTemp.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTempMax.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penClouds.clearRect(0, 0, chartForClouds.width, chartForClouds.height);
        penTypeMinChart.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTypeMaxChart.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penTypeCloudsChart.clearRect(0, 0, chartForClouds.width, chartForClouds.height);

        let distanceTime = 50;
        let distanceChart = 50;
        let tempMinYet = 90;
        let tempMaxYet = 0;
        Object.keys(timeByDay).forEach(day => {
            const partDay = day.split("-");
            const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
            if (dayreal !== day4.textContent) return;
            timeByDay[day].forEach(time => {
                penTypeMinChart.fillText(time, distanceTime, chartForTemp.height - 20);
                penTypeMaxChart.fillText(time, distanceTime, chartForTempMax.height - 20);
                penTypeCloudsChart.fillText(time, distanceTime, chartForClouds.height - 20);
                distanceTime += 100;
            });
            penTemp.fillStyle = "rgb(0, 54, 107)"; 
            penTempMax.fillStyle = "rgb(147, 0, 0)"; 
            penClouds.fillStyle = "rgb(255, 253, 146)"; 
            forecastData.list.forEach(time => {
                const day = time.dt_txt.split(" ")[0];
                const partDay = day.split("-");
                const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
                if(dayreal === day4.textContent){
                    penTemp.fillRect(distanceChart, chartForTemp.height - 50, 50, -(time.main.temp_min * 8));
                    penTemp.fillText(time.main.temp_min + "°C", distanceChart, (chartForTemp.height - 50) - (time.main.temp_min * 8) - 10);
                    penTempMax.fillRect(distanceChart, chartForTempMax.height - 50, 50, -(time.main.temp_max * 8));
                    penTempMax.fillText(time.main.temp_max + "°C", distanceChart, (chartForTempMax.height - 50) - (time.main.temp_max * 8) - 10);
                    const heightOfCloudsChart = weatherDensityMap[time.weather[0].description];
                    if (heightOfCloudsChart !== undefined){
                        penClouds.fillRect(distanceChart, chartForClouds.height - 50, 50, heightOfCloudsChart);
                        penClouds.fillText(time.weather[0].description, distanceChart, (chartForClouds.height - 50) + heightOfCloudsChart - 10);
                    }
                    if (time.main.temp_min < tempMinYet){
                        tempMinYet = time.main.temp_min;
                    }
                    if (time.main.temp_max > tempMaxYet){
                        tempMaxYet = time.main.temp_max;
                    }
                    distanceChart += 100;
                }
            });
        });
        tempMaxInDay.textContent = `Highest temperature in ${day4.textContent}: ${tempMaxYet}°C`;
        tempMinInDay.textContent = `Lowest temperature in ${day4.textContent}: ${tempMinYet}°C`;
        tempAverage.textContent = `Average temperatture in ${day4.textContent}: ${(tempMaxYet + tempMinYet)/2}°C`;
    }
});

day5.addEventListener('click', function(){
    const day2Appear = getComputedStyle(day2).opacity;
    const day3Appear = getComputedStyle(day3).opacity;
    const day1Appear = getComputedStyle(day1).opacity;
    const day4Appear = getComputedStyle(day4).opacity;
    if (day2Appear === "0" && day3Appear === "0" && day1Appear === "0" && day4Appear === "0"){
        home.style.opacity = 1;
        home.style.pointerEvents = "auto";
        day5.style.left = "980px";
        day5.style.top = "500px";
        day2.style.opacity = 1;
        day3.style.opacity = 1;
        day1.style.opacity = 1;
        day4.style.opacity = 1;
        SlideIn2.style.opacity = 0;
        SlideIn2.style.zIndex = "-9999";
        SlideIn2.style.pointerEvents = "none";
        day1.style.zIndex = "99999";
        day2.style.zIndex = "99999";
        day3.style.zIndex = "99999";
        day4.style.zIndex = "99999";
        day5.style.zIndex = "99999";
        day1.style.pointerEvents = "auto";
        day2.style.pointerEvents = "auto";
        day3.style.pointerEvents = "auto";
        day4.style.pointerEvents = "auto";
        day5.style.pointerEvents = "auto";
        find.style.pointerEvents = "none";
        find.style.filter = "grayscale(100%) blur(2px)";
        find.style.backgroundColor = "gray";
    }
    else {
        penTypeMinChart.font = "14px Arial";
        penTypeMinChart.fillStyle = "black";
        penTypeMaxChart.font = "14px Arial";
        penTypeMaxChart.fillStyle = "black";
        penTypeCloudsChart.font = "14px Arial";
        penTypeCloudsChart.fillStyle = "black";
        home.style.opacity = 0;
        home.style.zIndex = "-9999";
        SlideIn2.style.opacity = 1;
        SlideIn2.style.zIndex = "9999";
        SlideIn2.style.pointerEvents = "auto";
        home.style.pointerEvents = "none";
        day5.style.left = "50px";
        day5.style.top = "50px";
        day2.style.opacity = 0;
        day3.style.opacity = 0;
        day1.style.opacity = 0;
        day4.style.opacity = 0;

        day1.style.zIndex = "-99999";
        day3.style.zIndex = "-99999";
        day4.style.zIndex = "-99999";
        day2.style.zIndex = "-99999";
        penTemp.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTempMax.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penClouds.clearRect(0, 0, chartForClouds.width, chartForClouds.height);
        penTypeMinChart.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTypeMaxChart.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penTypeCloudsChart.clearRect(0, 0, chartForClouds.width, chartForClouds.height);

        let distanceTime = 50;
        let distanceChart = 50;
        let tempMinYet = 90;
        let tempMaxYet = 0;
        Object.keys(timeByDay).forEach(day => {
            const partDay = day.split("-");
            const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
            if (dayreal !== day5.textContent) return;
            timeByDay[day].forEach(time => {
                penTypeMinChart.fillText(time, distanceTime, chartForTemp.height - 20);
                penTypeMaxChart.fillText(time, distanceTime, chartForTempMax.height - 20);
                penTypeCloudsChart.fillText(time, distanceTime, chartForClouds.height - 20);
                distanceTime += 100;
            });
            penTemp.fillStyle = "rgb(0, 54, 107)"; 
            penTempMax.fillStyle = "rgb(147, 0, 0)"; 
            penClouds.fillStyle = "rgb(255, 253, 146)"; 
            forecastData.list.forEach(time => {
                const day = time.dt_txt.split(" ")[0];
                const partDay = day.split("-");
                const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
                if(dayreal === day5.textContent){
                    penTemp.fillRect(distanceChart, chartForTemp.height - 50, 50, -(time.main.temp_min * 8));
                    penTemp.fillText(time.main.temp_min + "°C", distanceChart, (chartForTemp.height - 50) - (time.main.temp_min * 8) - 10);
                    penTempMax.fillRect(distanceChart, chartForTempMax.height - 50, 50, -(time.main.temp_max * 8));
                    penTempMax.fillText(time.main.temp_max + "°C", distanceChart, (chartForTempMax.height - 50) - (time.main.temp_max * 8) - 10);
                    const heightOfCloudsChart = weatherDensityMap[time.weather[0].description];
                    if (heightOfCloudsChart !== undefined){
                        penClouds.fillRect(distanceChart, chartForClouds.height - 50, 50, heightOfCloudsChart);
                        penClouds.fillText(time.weather[0].description, distanceChart, (chartForClouds.height - 50) + heightOfCloudsChart - 10);
                    }
                    if (time.main.temp_min < tempMinYet){
                        tempMinYet = time.main.temp_min;
                    }
                    if (time.main.temp_max > tempMaxYet){
                        tempMaxYet = time.main.temp_max;
                    }
                    distanceChart += 100;
                }
            });
        });
        tempMaxInDay.textContent = `Highest temperature in ${day5.textContent}: ${tempMaxYet}°C`;
        tempMinInDay.textContent = `Lowest temperature in ${day5.textContent}: ${tempMinYet}°C`;
        tempAverage.textContent = `Average temperatture in ${day5.textContent}: ${(tempMaxYet + tempMinYet)/2}°C`;
    }
});


tempMinTable.addEventListener('click', function(){
    
    if (tempMinCheck.style.opacity === "1"){return;}
    else{
        chartForTemp.style.zIndex = "9999";
        chartForTemp.style.opacity = "1";
        tempMinTable.style.color = "rgb(162, 0, 0)";
        tempMinCheck.style.opacity = "1";
        chartForTempMax.style.zIndex = "-9999";
        chartForTempMax.style.opacity = "0";
        chartForClouds.style.zIndex = "-9999";
        chartForClouds.style.opacity = "0";
        tempMaxCheck.style.opacity = "0"; 
        cloudsCheck.style.opacity = "0";
        tempMaxTable.style.color = "black";
        cloudsTable.style.color = "black";
    }
});

tempMaxTable.addEventListener('click', function(){
    
    if (tempMaxCheck.style.opacity === "1"){return;}
    else{
        chartForTempMax.style.zIndex = "9999";
        chartForTempMax.style.opacity = "1";
        tempMaxTable.style.color = "rgb(162, 0, 0)";
        tempMaxCheck.style.opacity = "1";
        chartForTemp.style.zIndex = "-9999";
        chartForTemp.style.opacity = "0";
        chartForClouds.style.zIndex = "-9999";
        chartForClouds.style.opacity = "0";
        tempMinCheck.style.opacity = "0"; 
        cloudsCheck.style.opacity = "0";
        tempMinTable.style.color = "black";
        cloudsTable.style.color = "black";
    }
});

cloudsTable.addEventListener('click', function(){
    if (cloudsCheck.style.opacity === "1"){return}
    else{
        chartForClouds.style.zIndex = "9999";
        chartForClouds.style.opacity = "1";
        cloudsTable.style.color = "rgb(162, 0, 0)";
        cloudsCheck.style.opacity = "1";
        chartForTemp.style.zIndex = "-9999";
        chartForTemp.style.opacity = "0";
        chartForTempMax.style.zIndex = "-9999";
        chartForTempMax.style.opacity = "0";
        tempMaxCheck.style.opacity = "0"; 
        tempMinCheck.style.opacity = "0";
        tempMaxTable.style.color = "black";
        tempMinTable.style.color = "black";
    }
});

today.addEventListener('click', async function(){
    const homeState = getComputedStyle(home).opacity;
    const day1Appear = getComputedStyle(day1).opacity;
    if(homeState === "1"){
        await getWeatherForMenu();
        penTypeMinChart.font = "14px Arial";
        penTypeMinChart.fillStyle = "black";
        penTypeMaxChart.font = "14px Arial";
        penTypeMaxChart.fillStyle = "black";
        penTypeCloudsChart.font = "14px Arial";
        penTypeCloudsChart.fillStyle = "black";
        home.style.opacity = 0;
        home.style.zIndex = "-9999";
        SlideIn2.style.opacity = 1;
        SlideIn2.style.zIndex = "9999";
        SlideIn2.style.pointerEvents = "auto";
        home.style.pointerEvents = "none";
        day1.style.left = "50px";
        day1.style.top = "50px";
        day1.style.opacity = 1;
        day2.style.opacity = 0;
        day3.style.opacity = 0;
        day4.style.opacity = 0;
        day5.style.opacity = 0;

        day1.style.zIndex = "99999";
        day2.style.zIndex = "-99999";
        day3.style.zIndex = "-99999";
        day4.style.zIndex = "-99999";
        day5.style.zIndex = "-99999";
        penTemp.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTempMax.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penClouds.clearRect(0, 0, chartForClouds.width, chartForClouds.height);
        penTypeMinChart.clearRect(0, 0, chartForTemp.width, chartForTemp.height);
        penTypeMaxChart.clearRect(0, 0, chartForTempMax.width, chartForTemp.height);
        penTypeCloudsChart.clearRect(0, 0, chartForClouds.width, chartForClouds.height);
        
        let distanceTime = 50;
        let distanceChart = 50;
        let tempMinYet = 90;
        let tempMaxYet = 0;
        
        Object.keys(timeByDay).forEach(day => {
            const partDay = day.split("-");
            const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
            if (dayreal !== day1.textContent) return;
                timeByDay[day].forEach(time => {
                    penTypeMinChart.fillText(time, distanceTime, chartForTemp.height - 20);
                    penTypeMaxChart.fillText(time, distanceTime, chartForTempMax.height - 20);
                    penTypeCloudsChart.fillText(time, distanceTime, chartForClouds.height - 20);
                    distanceTime += 100;
                });
                penTemp.fillStyle = "rgb(0, 54, 107)"; 
                penTempMax.fillStyle = "rgb(147, 0, 0)"; 
                penClouds.fillStyle = "rgb(255, 253, 146)"; 
                forecastData.list.forEach(time => {
                    const day = time.dt_txt.split(" ")[0];
                    const partDay = day.split("-");
                    const dayreal = `${partDay[2]}-${partDay[1]}-${partDay[0]}`;
                    if(dayreal === day1.textContent){
                        penTemp.fillRect(distanceChart, chartForTemp.height - 50, 50, -(time.main.temp_min * 8));
                        penTypeMinChart.fillText(time.main.temp_min + "°C", distanceChart, (chartForTemp.height - 50) - (time.main.temp_min * 8) - 10);
                        penTempMax.fillRect(distanceChart, chartForTempMax.height - 50, 50, -(time.main.temp_max * 8));
                        penTypeMaxChart.fillText(time.main.temp_max + "°C", distanceChart, (chartForTempMax.height - 50) - (time.main.temp_max * 8) - 10);
                        const heightOfCloudsChart = weatherDensityMap[time.weather[0].description];
                        if (heightOfCloudsChart !== undefined){
                            penClouds.fillRect(distanceChart, chartForClouds.height - 50, 50, heightOfCloudsChart);
                            penTypeCloudsChart.fillText(time.weather[0].description, distanceChart, (chartForClouds.height - 50) + heightOfCloudsChart - 10);
                        }
                        if (time.main.temp_min < tempMinYet){
                            tempMinYet = time.main.temp_min;
                        }
                        if (time.main.temp_max > tempMaxYet){
                            tempMaxYet = time.main.temp_max;
                        }
                        distanceChart += 100;
                    }
                    
                });
        });
        tempMaxInDay.textContent = `Highest temperature in ${day1.textContent}: ${tempMaxYet}°C`;
        tempMinInDay.textContent = `Lowest temperature in ${day1.textContent}: ${tempMinYet}°C`;
        tempAverage.textContent = `Average temperatture in ${day1.textContent}: ${(tempMaxYet + tempMinYet)/2}°C`;
        menuBar.style.transform = "translateX(-100vw)";
        menuBar.style.opacity = "0";
        menu.style.transform = "translateX(0px)";
    }
    else {
        if (day1Appear === "1"){
            menuBar.style.transform = "translateX(-100vw)";
            menuBar.style.opacity = "0";
            menu.style.transform = "translateX(0px)";
            return;
        }
    }
});
about.addEventListener('click', () => {
    window.location.href = "https://openweathermap.org";
});
const checkLoginStatus = JSON.parse(localStorage.getItem('user'));
if (checkLoginStatus){
    personal.textContent = checkLoginStatus.name;
}
else{
    personal.textContent = "Log in";
}
personal.addEventListener('click', function(){
    if (personal.textContent.includes("Log in")){
        window.location.href = "/login";
    }
    else{
        personalInfo.style.opacity = 1;
        personalInfo.style.zIndex = 999999;
        info_username.textContent = `Name: ${checkLoginStatus.name}`;
        info_email.textContent = `Email: ${checkLoginStatus.email}`;
        info_telephone.textContent = `Telephone: ${checkLoginStatus.telephone}`;
    }
});
exit.addEventListener('click', function(){
    personalInfo.style.opacity = 0;
    personalInfo.style.zIndex = -999999;
});
logout.addEventListener('click', function(){
    localStorage.clear();
    personalInfo.style.opacity = 0;
    personalInfo.style.zIndex = -999999;
    personal.textContent = "Log in";
});
deleteAcc.addEventListener('click', function(){
    deleteWarning.style.opacity = 1;
    deleteWarning.style.zIndex = "9999999";
    deleteWarning.style.pointerEvents = "auto";
});
acceptDel.addEventListener('click', async function(){
    const res = await fetch('/DeleteAccoutHandler', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": JSON.parse(localStorage.getItem('user')).name
        }),
    });
    const getDeleteData = await res.json();
    if (getDeleteData.status){
        alert(getDeleteData.message);
        localStorage.clear();
        personalInfo.style.opacity = 0;
        personalInfo.style.zIndex = -999999;
        personal.textContent = "Log in";
        deleteWarning.style.opacity = 0;
        deleteWarning.style.zIndex = "-9999999";
        deleteWarning.style.pointerEvents = "none";
    }
    else{
        alert(getDeleteData.message);
        deleteWarning.style.opacity = 0;
        deleteWarning.style.zIndex = "-9999999";
        deleteWarning.style.pointerEvents = "none";
    }
});
refuseDel.addEventListener('click', function(){
    deleteWarning.style.opacity = 0;
    deleteWarning.style.zIndex = "-9999999";
    deleteWarning.style.pointerEvents = "none";
});
feedback.addEventListener('click', function(){
    const userExitFirst = JSON.parse(localStorage.getItem('user'));
    if (!userExitFirst){
        alert('Please Log In or Register first^^');
        return;
    }
    boxfather_feedback.style.opacity = 1;
    boxfather_feedback.style.zIndex = "9999999";
    boxfather_feedback.style.pointerEvents = "auto";
});
exitFeedback.addEventListener('click', () => {
    boxfather_feedback.style.opacity = 0;
    boxfather_feedback.style.zIndex = "-9999999";
    boxfather_feedback.style.pointerEvents = "none";
    document.getElementById('feedback_data').value = "";
});

send.addEventListener('click', async function(){
    const getFeedBack_Data = document.getElementById('feedback_data').value;  
    if(getFeedBack_Data == ""){
        return
    }
    const res = await fetch('/FeedbackHandler', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sendingFeedback: getFeedBack_Data,
            clientSending: JSON.parse(localStorage.getItem('user')).email,
            nameClient: JSON.parse(localStorage.getItem('user')).name,
            messageSending: getFeedBack_Data
        }),
    });
    const get_FeedbackAPI_Response = await res.json();
    if (get_FeedbackAPI_Response.state){
        alert(get_FeedbackAPI_Response.message);
        document.getElementById('feedback_data').value = "";
    }
    else {
        alert(get_FeedbackAPI_Response.message);
        document.getElementById('feedback_data').value = "";
    }
});