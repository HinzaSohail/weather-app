async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = ""; // Replace this!https://api.openweathermap.org/data/2.5/weather?q=London&appid=bd5e378503939ddaee76f12ad7a97608&units=metric
  const url = https://api.openweathermap.org/data/2.5/weather?q=London&appid=bd5e378503939ddaee76f12ad7a97608&units=metric//;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>${data.weather[0].main} - ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
      `;
    } else {
      document.getElementById("weatherResult").innerText = "Location not found.";
    }
  } catch (error) {
    document.getElementById("weatherResult").innerText = "Error fetching data.";
  }
}