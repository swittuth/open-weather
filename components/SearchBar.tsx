import { FaSearchLocation } from 'react-icons/fa';
import { SyntheticEvent, useContext, useState } from 'react';
import InputRecommendation from './InputRecommendation';
import _debounce from 'lodash/debounce';
import AppContext from './context/state';
import useSWR from 'swr';

// fetch countries data
const fetcher = (url: 'string') => fetch(url).then((res) => res.json());

const apiKey = '&appid=46851850e98217dd4c7f75597b6dc9dd&units=imperial';
const apiGeo: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiWeather = 'https://api.openweathermap.org/data/2.5/onecall?';

type CountriesDataType = {
  name: string;
  code: string;
};

const SearchBar = () => {
  const [recommendation, setRecommendation] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const { data, error } = useSWR('/api/countriesdata', fetcher);
  const {
    searchValue,
    setSearchValue,
    currWeatherData,
    setCurrWeatherData,
    setLoading,
  } = useContext(AppContext);

  if (error) return <div>Unable to load backend data</div>;

  const handleSearchValue = (event: SyntheticEvent) => {
    setIsTyping(true);
    setSearchValue(event.target.value);
    debounceHandleRecommendation(event);
  };

  const handleRecommendation = (event: SyntheticEvent) => {
    if (event.target.value === '') {
      setRecommendation((recs) => []);
      setIsTyping(false);
      return;
    }
    const result = JSON.parse(data).filter(
      (obj: CountriesDataType) =>
        obj.name.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0
    );
    setRecommendation((recs) => [...result]);
    setIsTyping(false);
  };
  const debounceHandleRecommendation = _debounce(handleRecommendation, 1000);
  const handleSubmit = async () => {
    if (searchValue) {
      setSearchValue((value) => '');
      try {
        setLoading(true);
        const data = await fetch(`${apiGeo}${searchValue}${apiKey}`).then(
          (data) => data.json()
        );
        console.log('curr data', data);
        const { lat, lon } = data.coord;
        // to get hourly and daily data
        const weatherData = await fetch(
          `${apiWeather}lat=${lat}&lon=${lon}${apiKey}`
        ).then((data) => data.json());
        const { timezone: timezoneOffset } = weatherData.current;
        const utcTime = Date.now();
        const timezoneTime = new Date(utcTime + timezoneOffset * 1000);
        console.log('curr data', weatherData);
        setCurrWeatherData((currData) => {
          return {
            ...data.main,
            name: data.name,
            condition: data.weather[0].main,
            condition_description: data.weather[0].description,
            ...data.wind,
            visibility: data.visibility,
            time: timezoneTime,
            daily: weatherData.daily,
            hourly: weatherData.hourly,
          };
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div
        className={`${
          searchValue === '' ? 'w-0' : 'w-[500px]'
        } focus-within:w-[500px] transition-all duration-150`}
      >
        <form
          className={`${
            searchValue === '' ? 'w-11' : 'w-full'
          } h-11 flex items-center justify-center border-2 p-2 rounded-full focus-within:w-full transition-all duration-150`}
        >
          <input
            type='text'
            className='outline-0 w-full relative bg-transparent'
            placeholder='Enter location'
            onChange={handleSearchValue}
            value={searchValue}
            aria-label='location-text-input'
            autoComplete='false'
            autoCapitalize='false'
            autoFocus
          />
          <button
            className='bg-slate-200 p-2 w-8 h-8 rounded-full hover:bg-slate-300 transition-colors duration-150 border-0 relative'
            aria-label='submit-search'
            type='button'
            onClick={handleSubmit}
          >
            <FaSearchLocation />
          </button>
        </form>
        <div className='relative'>
          <InputRecommendation
            recommendation={recommendation}
            handleSearchValue={setSearchValue}
            setRecommendation={setRecommendation}
            isTyping={isTyping}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
