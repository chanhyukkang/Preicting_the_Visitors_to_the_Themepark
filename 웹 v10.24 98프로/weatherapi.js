function parseWeather()
{
    loadJson(function(response)
            {
        var jsonData = JSON.parse(response);
        document.getElementById("todayWeather").innerHTML = jsonData["list"][0]["weather"][0]["main"];
    });
}

function loadJSON(callback)
{
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Busan,KR&cnt=7&APPID=36306aa3ee496393a49c392f323c30fe";
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET',url,true);
    
    request.onreadystatechange = function ()
    {
        if(request.readyState == 4 && request.status =="200")
            {
                callback(request.responseText);
            }
    };
    request.send(null);
}
