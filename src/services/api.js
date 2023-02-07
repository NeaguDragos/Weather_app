

const getCurrentWeather = async (city) => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city || "Bucharest"}&appid=ff1cb632ef52a9f357c0b02bcde36143&units=metric`);
        const data = await res.json();
        return {data: data, error: null};
    } 
    catch(error){
        return {error: "Cannot get weather data", data: null};
    }
}

const getForecastFiveDays = async (city) => {
    const appId = "ff1cb632ef52a9f357c0b02bcde36143";
    const units = "metric"
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city || "Bucharest"}&appid=${appId}&units=${units}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return {data: data, error: null};
    }
    catch(error) {
        return {error: "Cannot get weather data", data: null};
    }
}


export { getCurrentWeather, getForecastFiveDays }