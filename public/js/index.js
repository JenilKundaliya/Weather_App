const cityName = document.getElementById("cityName")
const searchBtn = document.getElementById("searchBtn");
const resultcityVal = document.getElementById("cityVal")
const getInfo = async(e)=>{
    e.preventDefault();
    let weatherVal = `<p id="outputpara">Get Output Here</p>`
    let cityVal = cityName.value;
    if(cityVal === "")
    {
        resultcityVal.innerText = "Please Enter A City Name";
    }
    else{
       
            try{
                let url = `https://weather-app-by-jenil.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=193a1cac5ebe9a54b536b8e9b6c1e27f`
                const response = await fetch(url);
                const data = await response.json();

                const apiData = [data]
                console.log(apiData);
                // const apiData = [data];
                cityVal = cityVal.toUpperCase();
                resultcityVal.innerText = `${cityVal},IN`;
                
                let resultStatus = apiData[0].weather[0].main;
                console.log(resultStatus)
                // resultStatus = resultStatus.toLowerCase()
                let weatherStatus = document.getElementById('weatherStatus')
                if(resultStatus === "Fog")
                {
                    weatherStatus.innerHTML = `<i class="fas fa-cloud-sun"></i>`
                    weatherStatus.style.color = 'yellow'
                }
                else if(resultStatus === "Clouds"){
                    weatherStatus.innerHTML = `<i class="fas fa-cloud"></i>`
                }
                else if(resultStatus === "Haze"){

                    weatherStatus.innerHTML= `<i class="fas fa-sun-dust"></i>`
                    weatherStatus.innerHTML = `<i class="fas fa-cloud-sun"></i>`
                    weatherStatus.style.color = 'pink'
                }
                else{
                    weatherStatus.style.color = 'yellow'
                    weatherStatus.innerHTML= `<i class="fas fa-sun"></i>`
                }
                 weatherVal = document.getElementById('weatherVal');
                let resultemp = apiData[0].main.temp;
                weatherVal.innerHTML = `<span id="weatherspan">${resultemp}</span><sup>0</sup>C`
            }
            catch{
                resultcityVal.innerText = "Please Enter A Valid City Name";
                weatherVal = `<p id="outputpara">Get Output Here</p>`
            }
        
        
    }

}
searchBtn.addEventListener("click",getInfo);