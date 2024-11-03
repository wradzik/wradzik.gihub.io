
window.onload = function(){
    let col = decodeURIComponent(document.cookie).split(';')[0];
    console.log(col)
    document.addEventListener("keydown", (event) => {
    if (event.keyCode === 82) {
        window.location.href = "index.html";
    }
}); 
    document.addEventListener("keydown", (event) => {
    if (event.keyCode === 66) {
        document.cookie = "color=blue; expires=Thu, 5 March 2030 12:00:00 UTC";
        document.getElementById("bod").className = "blu";
    }
});
    document.addEventListener("keydown", (event) => {
    if (event.keyCode === 80) {
        document.getElementById("bod").className = "pik";
        document.cookie = "color=pink; expires=Thu, 5 March 2030 12:00:00 UTC";
    }
});
    var obj;
try{
fetch('http://api.weatherapi.com/v1/current.json?key=b8c82a0927d14f588da205229240211&q=Leipzig')
  .then(res => res.json())
  .then(data => {
    obj = data;
   })
  .then(() => {
    console.log(obj.current.condition.text);
    console.log(obj.current.condition.icon);
    console.log(obj.current.temp_c);
    console.log(obj.current.wind_kph);
    document.getElementById("weather").innerHTML = `
    <h3>Fun fact! This is the current weather in Hanna's hometown:</h3>
    ${obj.current.condition.text}<br/>
    Temperature: ${obj.current.temp_c}°c<br/>
    Wind: ${obj.current.wind_kph} km/h<br/>
    Wind direction: ${obj.current.wind_dir}

    
    `;
   });
}
catch{
    document.getElementById("weather").innerHTML =`
    This was supposed to be a weather report from her hometown, but API seems to be down. Instead, fun fact: she has a cat which is very cute.`
}
}
