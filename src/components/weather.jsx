import React, { useEffect, useCallback, useMemo } from 'react'
import Search from '../assets/search.png'
import Wind from '../assets/wind.png'
import Cloud from '../assets/cloudy.png'
import Sun from '../assets/sun.png'
import humidity from '../assets/humidity.png'
import Rain from '../assets/rain.png'

const Weather = () => {
    const [weatherData, setWeatherData] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const input = React.useRef();

    const allIcons = useMemo(() => ({
        "01d": Sun,
        "01n": Sun,
        "02d": Cloud,
        "02n": Cloud,
        "03d": Cloud,
        "03n": Cloud,
        "04d": Cloud,
        "04n": Cloud,
        "09d": Rain,
        "09n": Rain,
        "10d": Rain,
        "10n": Rain,
        "11d": Wind,
        "11n": Wind,
        "13d": humidity,
        "13n": humidity,
        "50d": humidity,
        "50n": humidity,
    }), []);

    const search = useCallback(async (city) => {
        if (!city) {
            setError("Please enter a city name");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const apiKey = import.meta.env.VITE_APP_ID;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`City not found or API error (${response.status})`);
            }

            const data = await response.json();
            const icon = allIcons[data.weather[0].icon] || Sun;
            
            setWeatherData({
                humidity: data.main.humidity,
                wind: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                city: data.name,
                icon: icon,
                description: data.weather[0].description,
                feels_like: Math.floor(data.main.feels_like),
                country: data.sys.country
            });
        } catch (err) {
            console.error("Error fetching weather data:", err);
            setError(err.message || "Failed to fetch weather data");
        } finally {
            setLoading(false);
        }
    }, [allIcons]);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        try {
                            const apiKey = import.meta.env.VITE_APP_ID;
                            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
                            const response = await fetch(url);
                            const data = await response.json();
                            search(data.name);
                        } catch (err) {
                            console.error("Error getting location weather:", err);
                            search('Ha Noi'); // Fallback to default city
                        }
                    },
                    (error) => {
                        console.error("Geolocation error:", error);
                        search('Ha Noi'); // Fallback to default city
                    }
                );
            } else {
                search('Ha Noi'); // Fallback to default city
            }
        };

        getLocation();
    }, [search]);

    return (
        <div className='h-4/6 w-5/12 bg-transparent flex flex-col items-center border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)] rounded-xl p-4'>
            <div className='flex flex-row items-center justify-between w-5/6 h-10 border border-stone-950 rounded-xl overflow-hidden px-3 mt-5'>
                <input 
                    ref={input} 
                    type="text" 
                    className='flex flex-1 h-full bg-transparent focus:outline-none focus:ring-0 text-center placeholder:text-center placeholder:text-black text-xl font-bold text-black' 
                    placeholder='Search City'
                    onKeyPress={(e) => e.key === 'Enter' && search(input.current.value)}
                />
                <img 
                    src={Search} 
                    alt="search" 
                    className='cursor-pointer h-4/6' 
                    onClick={() => search(input.current.value)} 
                />
            </div>

            {loading && (
                <div className="mt-10 text-2xl font-bold animate-pulse">
                    Loading weather data...
                </div>
            )}

            {error && (
                <div className="mt-10 text-red-500 text-xl font-bold">
                    {error}
                </div>
            )}

            {!loading && !error && weatherData && (
                <>
                    <div className="flex items-center gap-2">
                        <h1 className='text-6xl font-black mt-11'>{weatherData.city}</h1>
                        <span className="text-2xl mt-11">{weatherData.country}</span>
                    </div>

                    <div className="flex items-center gap-4 mt-8">
                        <img src={weatherData.icon} alt="weather" className="w-20 h-20" />
                        <p className='text-8xl font-bold'>{weatherData.temperature}°C</p>
                    </div>

                    <p className="text-xl font-medium mt-2 capitalize">{weatherData.description}</p>
                    <p className='text-2xl font-bold mb-6'>
                        Feels like: {weatherData.feels_like}°C | {Math.round((weatherData.feels_like * 9) / 5 + 32)}°F
                    </p>

                    <div className='h-1/6 w-11/12 flex flex-row justify-between gap-6'>
                        <div className='border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)] h-full w-2/4 rounded-xl flex flex-col items-center justify-center transform transition-all hover:scale-105'>
                            <h1 className='font-black text-3xl'>Wind</h1>
                            <div className='h-2/6 w-full mb-2 flex flex-row items-center justify-center relative'>
                                <img src={Wind} alt="" className='h-9 absolute left-2 animate-spin-slow' />
                                <p className='text-2xl font-medium'>{weatherData.wind}km/h</p>
                            </div>
                        </div>

                        <div className='border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)] h-full w-2/4 rounded-xl flex flex-col items-center justify-center transform transition-all hover:scale-105'>
                            <h1 className='font-black text-3xl'>Humidity</h1>
                            <div className='h-2/6 w-full mb-2 flex flex-row items-center justify-center relative'>
                                <img src={humidity} alt="" className='h-9 absolute left-2' />
                                <p className='text-2xl font-medium'>{weatherData.humidity}%</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Weather
