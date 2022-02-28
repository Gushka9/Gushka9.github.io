//Clock by utc\\
function clock() {
    let clock = document.querySelector("#clock")
    clock.innerHTML = moment().utcOffset(180);
    setInterval(() => {
        clock.innerHTML = moment().utcOffset(180).format("H:mm:ss")
    }, 1000);
};
clock();

//onclick img flag\\
function flagDescription() {
    let flag = document.getElementById("flag");
    let description = document.getElementById("flag-description")
    if (flag.style.display == "block") {
        flag.style.display = "none";
        description.style.display = "block";
    } else {
        flag.style.display = "block";
        description.style.display = "none";
    }
};

//main banner, emblem\\
let emblem = document.querySelector(".emblem");
emblem.style.border = "5px solid darkcyan";

function sayText() {
    let emblemText = "The State Emblem of Republic Kalmykia represents the image yellow color in a frame of a national ornament on a blue background, in which basis — petals of a flower of a white lotus.";
    alert(emblemText);
    console.log(emblemText);
}
emblem.addEventListener("click", sayText);


//image between section1 and section2\\
function flower() {
    let flower = document.querySelector(".scroll");
    setInterval(() => {
        flower.style.backgroundColor = "red";
        flower.style.borderRadius = "50%";
        flower.style.border = "2px solid darkred";
        flower.style.opacity = "0.5";
    });
};
flower();

//Wheather API\\
function getAPIWeather() {
    fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=46.3166654%2C44.266666", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "76ce5f9471msh816fde53cecf978p1d1e73jsnd2e5fdc145ce"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:' + data);
            const rychlostVetru = data.current.wind_kph;
            const pictureWeather = data.current.condition.icon;
            document.querySelector(".pictureWeather").src = "https:" + pictureWeather
            document.querySelector(".weather span").innerHTML = data.current.temp_c + "°C";
            if (rychlostVetru > 20) {
                document.querySelector(".weatherAlert").innerHTML = "Pozor na silný vítr!";
            } else {
                document.querySelector(".weatherAlert").innerHTML = "The wind is fine.";
            }
        })
        .catch(err => {
            console.error(err);
        });
}
getAPIWeather();

//Exchage API\\
function exchange() {
    fetch("https://freecurrencyapi.net/api/v2/latest?apikey=0de05fd0-98eb-11ec-9c40-0bcac18a55c1", {
            "method": "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:' + data);
            document.querySelector(".exchange").innerHTML = "$ 1 = " + data.data.RUB + " &#8381;";
        })
}
exchange();

//Clock in real time\\
/* 
function clock(){
var date = new Date(),
hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),S
minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);
*/
