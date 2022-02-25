//Clock by utc
        let clock = document.querySelector("#clock")    
        clock.innerHTML = moment().utcOffset(180);

    
//onclick img flag
        function myFunction() {
            let flag=document.getElementById("flag");
            let flagDescription = document.getElementById("flag-description")
            
            if(flag.style.display == "block"){
                flag.style.display = "none";
                flagDescription.style.display = "block";}
            else{
                flag.style.display = "block";
                flagDescription.style.display = "none";
            }
            }


//main banner, emblem
let emblem = document.querySelector(".emblem");
emblem.style.border = "5px solid darkcyan";
let emblemText = "The State Emblem of Republic Kalmykia represents the image yellow color in a frame of a national ornament on a blue background, in which basis — petals of a flower of a white lotus.";
function sayText(){
    alert (emblemText);
    console.log(emblemText);
}
emblem.addEventListener("click", sayText);


//image between section1 and section2
let flower = document.querySelector(".scroll");
flower.style.backgroundColor = "red";
flower.style.borderRadius = "50%";
flower.style.border = "2px solid darkred";
flower.style.opacity = "0.5";




//Clock in real time
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