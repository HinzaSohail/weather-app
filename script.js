async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace this!
  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey};

  try {
    const response = await fetch(url);
    const data = await response.json();

    const result = document.getElementById("weatherResult");

    if (data.cod === 200) {
      const iconCode = data.weather[0].icon;
      const iconUrl = https://openweathermap.org/img/wn/${iconCode}@2x.png;

      result.innerHTML = `
        <div class="flex flex-col items-center">
          <img src="${iconUrl}" alt="${data.weather[0].description}" class="w-20 h-20" />
          <p class="text-2xl font-semibold">${data.name}, ${data.sys.country}</p>
          <p class="capitalize">${data.weather[0].description}</p>
          <p class="text-xl">Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} m/s</p>
        </div>
      `;
    } else {
      result.innerHTML = <p class="text-red-200">Location not found.</p>;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = <p class="text-red-200">Error fetching data.</p>;
  }
}