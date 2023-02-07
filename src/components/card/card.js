import { useRef, useState } from "react";
import { getCurrentWeather } from "../../services/api";
import { Button, Form } from "react-bootstrap";
import "./card.css";
import { useEffectOnce } from "../../customHooks/customHooks";
import { useNavigate } from "react-router-dom";

const Card = ({ onSearch, location, onClose }) => {
  const [weatherData, setWeatherData] = useState();

  const inputRef = useRef();

  const navigate = useNavigate();

  const handleSearch = (city) => {
    onSearch(city);
    getCurrentWeather(city)
      .then((res) => {
        if (res?.data?.message) {
          alert(res.data.message);
        } else if (res?.data) {
          setWeatherData(res.data);
        } else {
          alert(res.error);
        }
      })
      .catch((error) => {
        console.log(">>>>", error);
      });
  };

  useEffectOnce(() => {
    handleSearch(location);
  }, []);

  const handleRedirect = () => {
    navigate(`/forecast/${weatherData.name}`);
  };

  return (
    <div className="card-container">
      <button
        className="btn btn-close btn-close-white"
        style={{ float: "right" }}
        onClick={onClose}
      ></button>
      {weatherData ? (
        <>
          <p className="card-city">{weatherData?.name}</p>
          {weatherData?.weather && (
            <img
              src={
                "http://openweathermap.org/img/wn/" +
                weatherData?.weather[0]?.icon +
                "@2x.png"
              }
              alt="weather icon"
            />
          )}
          {weatherData?.weather && (
            <p className="card-weather-description">
              {weatherData?.weather[0]?.description}
            </p>
          )}
          <p>
            <span>Temperature:</span>
            {weatherData?.main?.temp}&#8451;
          </p>
          <p>
            <span>Humidity:</span> {weatherData?.main?.humidity}%
          </p>
          <p>
            <span>Pressure:</span> {weatherData?.main?.pressure}hPa
          </p>
          <p>
            <span>Wind speed: </span>
            {weatherData?.wind?.speed}km/h
          </p>
          <Button className="m-4" onClick={handleRedirect}>
            See forecast for next 5 days
          </Button>
        </>
      ) : (
        <p>Please search a city</p>
      )}
      <div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Bucharest"
            className="input-field me-2"
            aria-label="Search"
            ref={inputRef}
          />
          <Button
            className="search-button"
            variant="success"
            onClick={() => handleSearch(inputRef.current.value)}
          >
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Card;
