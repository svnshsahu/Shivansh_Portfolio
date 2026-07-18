
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, ArrowLeft } from "lucide-react";

function Weather() {
  const API_KEY = "393c24cc0b0303b4749deb1c7db3bcf7";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city.trim()) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        alert("City not found");
        return;
      }

      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-700 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-3xl bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl p-8">

        <Link
          to="/project/weather-checking-webpage"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <h1 className="text-4xl font-bold text-center text-white">
          Weather
        </h1>

        <p className="text-center text-white/70 mt-2 mb-8">
          Search weather anywhere in the world
        </p>

        <div className="flex gap-3">

          <div className="relative flex-1">

            <input
              type="text"
              placeholder="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-xl bg-white/20 border border-white/20 pl-11 pr-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white"
            />

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70"
            />

          </div>

          <button
            onClick={getWeather}
            className="rounded-xl bg-white text-blue-600 px-5 font-semibold hover:scale-105 hover:shadow-lg transition"
          >
            Search
          </button>

        </div>

        {weather && (
          <div className="mt-10 text-center text-white">

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              className="mx-auto w-32"
            />

            <h2 className="text-6xl font-bold">
              {Math.round(weather.main.temp)}°
            </h2>

            <div className="flex justify-center items-center gap-2 mt-2">

              <MapPin size={18} />

              <span className="text-xl font-medium">
                {weather.name}
              </span>

            </div>

            <p className="capitalize text-white/80 mt-2 text-lg">
              {weather.weather[0].description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white/70 text-sm">Humidity</p>
                <h3 className="text-2xl font-bold">
                  {weather.main.humidity}%
                </h3>
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white/70 text-sm">Feels Like</p>
                <h3 className="text-2xl font-bold">
                  {Math.round(weather.main.feels_like)}°
                </h3>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default Weather;