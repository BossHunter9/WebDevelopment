let url = "http://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City,us&units=imperial&APPID=d16f910e07bccc8a2482189dd962a46a"



function loadDoc() {
    
    //---------------------
    // This is where you would get references to all
    // HTML elements that you want to update with new data
    // based on the results of the asynchronous API call you make below
    //---------------------
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            //---------------------
            console.log("Successful...");
            //console.log(this.responseText);
            // This is where you would update the HTML elements above
            // with the data you pull from the API call response
            // document.getElementById("demo").innerHTML = this.responseText;
            //---------------------
            
            
            let weatherDataDays = JSON.parse(this.response);
            
            //let weatherDate = newDate(currentDay.dt_txt + 'UTC');
            //console.log(weatherDate.getDate());
           
            //console.log(weatherDataDays.list)
            
            //console.log(weatherDataDays);
           let dayCounter = 0;
           for(let counter = 0; counter < weatherDataDays.list.length; counter += 8){
                let currentDay = weatherDataDays.list[counter];
                console.log(currentDay);
                console.log(counter);
                if(dayCounter == 0){
                document.getElementById("place").innerHTML = "City = " + weatherDataDays.city.name;
                document.getElementById("day").innerHTML = weatherDataDays.dt_txt;
                document.getElementById("currentTemp").innerHTML = weatherDataDays.list[0].main.temp + " Degrees fahrenheit";
                //document.getElementById("conditions").innerHTML = weatherDataDays.list[0].weather[0].main;
                document.getElementById("conditionsDesc").innerHTML = "Sky behavior = " + weatherDataDays.list[0].weather[0].description;
                dayCounter++;
                }
                else if(dayCounter == 1){
                    document.getElementById("place1").innerHTML = "City = " + weatherDataDays.city.name;
                    document.getElementById("day1").innerHTML = weatherDataDays.dt_txt;
                    document.getElementById("currentTemp1").innerHTML = weatherDataDays.list[1].main.temp + " Degrees fahrenheit";
                    //document.getElementById("conditions1").innerHTML = weatherDataDays.list[1].weather[0].main;
                    document.getElementById("conditionsDesc1").innerHTML =  "Sky behavior = " + weatherDataDays.list[1].weather[0].description;
                    dayCounter++;
                }
                else if(dayCounter == 2){
                    document.getElementById("place2").innerHTML = "City = " + weatherDataDays.city.name;
                    document.getElementById("day2").innerHTML = weatherDataDays.dt_txt;
                    document.getElementById("currentTemp2").innerHTML = weatherDataDays.list[2].main.temp + " Degrees fahrenheit";
                   // document.getElementById("conditions2").innerHTML = weatherDataDays.list[2].weather[0].main ;
                    document.getElementById("conditionsDesc2").innerHTML = "Sky behavior = " + weatherDataDays.list[2].weather[0].description;
                    dayCounter++;
                }
                else if(dayCounter == 3){
                    document.getElementById("place3").innerHTML = "City = " + weatherDataDays.city.name;
                    document.getElementById("day3").innerHTML = weatherDataDays.dt_txt;
                    document.getElementById("currentTemp3").innerHTML = weatherDataDays.list[3].main.temp + " Degrees fahrenheit";
                   // document.getElementById("conditions3").innerHTML = weatherDataDays.list[3].weather[0].main;
                    document.getElementById("conditionsDesc3").innerHTML = "Sky behavior = " + weatherDataDays.list[3].weather[0].description;
                    dayCounter++;
                    }
                else if(dayCounter == 4){
                    document.getElementById("place4").innerHTML = "City = " + weatherDataDays.city.name;
                    document.getElementById("day4").innerHTML = weatherDataDays.dt_txt;
                    document.getElementById("currentTemp4").innerHTML = weatherDataDays.list[4].main.temp + " Degrees fahrenheit";
                   // document.getElementById("conditions4").innerHTML = weatherDataDays.list[4].weather[0].main;
                    document.getElementById("conditionsDesc4").innerHTML = "Sky behavior = " + weatherDataDays.list[4].weather[0].description;
                    dayCounter++;
                    }
                else if(dayCounter == 5){
                    document.getElementById("place5").innerHTML = "City = " + weatherDataDays.city.name;
                    document.getElementById("day5").innerHTML = weatherDataDays.dt_txt;
                    document.getElementById("currentTemp5").innerHTML = weatherDataDays.list[5].main.temp + " Degrees fahrenheit";
                   // document.getElementById("conditions5").innerHTML = weatherDataDays.list[5].weather[0].main;
                    document.getElementById("conditionsDesc5").innerHTML = "Sky behavior = " + weatherDataDays.list[5].weather[0].description;
                    }
            }



        } else {
            
            //---------------------
            console.log("failure...")

            // error message for user that API is down
            //---------------------
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
        
//---------------------
// Make sure you call the function to begin the request for information
// In the weather widget, you will want to call this function using the
// onClick event of the form submit button
ShowTheWeather = (form) => {
loadDoc();
}

HideTheWeather = (form) => {
    document.getElementById("place").innerHTML = "";
    document.getElementById("day").innerHTML = "";
    document.getElementById("currentTemp").innerHTML = "";
    //document.getElementById("conditions").innerHTML = weatherDataDays.list[0].weather[0].main;
    document.getElementById("conditionsDesc").innerHTML = "";

    document.getElementById("place1").innerHTML = "";
    document.getElementById("day1").innerHTML = "";
    document.getElementById("currentTemp1").innerHTML = "";
    //document.getElementById("conditions1").innerHTML = weatherDataDays.list[0].weather[0].main;
    document.getElementById("conditionsDesc1").innerHTML = "";

    document.getElementById("place2").innerHTML = "";
    document.getElementById("day2").innerHTML = "";
    document.getElementById("currentTemp2").innerHTML = "";
    //document.getElementById("conditions").innerHTML = weatherDataDays.list[0].weather[0].main;
    document.getElementById("conditionsDesc2").innerHTML = "";

    document.getElementById("place3").innerHTML = "";
    document.getElementById("day3").innerHTML = "";
    document.getElementById("currentTemp3").innerHTML = "";
    //document.getElementById("conditions").innerHTML = weatherDataDays.list[0].weather[0].main;
    document.getElementById("conditionsDesc3").innerHTML = "";

    document.getElementById("place4").innerHTML = "";
    document.getElementById("day4").innerHTML = "";
    document.getElementById("currentTemp4").innerHTML = "";
    //document.getElementById("conditions").innerHTML = weatherDataDays.list[0].weather[0].main;
    document.getElementById("conditionsDesc4").innerHTML = "";

    document.getElementById("place5").innerHTML = "";
    document.getElementById("day5").innerHTML = "";
    document.getElementById("currentTemp5").innerHTML = "";
    //document.getElementById("conditions").innerHTML = weatherDataDays.list[0].weather[0].main;
    document.getElementById("conditionsDesc5").innerHTML = "";
}
