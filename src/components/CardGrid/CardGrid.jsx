import { useEffect, useState } from 'react';
import { CardItem } from './CardItem';
import Select from 'react-select';
import './CardGrid.css';

const getCards = async () => {
  const URL =
    'https://geocoding-api.open-meteo.com/v1/search?name=new%20york&count=100';
  const resp = await fetch(URL);
  const data = await resp.json();

  const cards = data.results.map((card) => ({
    id: card.id,
    name: card.name,
    latitude: card.latitude,
    longitude: card.longitude,
    timezone: card.timezone,
    countryCode: card.country_code,
    featureCode: card.feature_code,
    country: card.country,
    admin1: card.admin1,
    admin2: card.admin2,
    admin3: card.admin3,
  }));

  return cards;
};

export const CardGrid = () => {
  const [cards, setCards] = useState([]);
  const [featureCode, setFeatureCode] = useState();
  const [countryCode, setCountryCode] = useState();

  useEffect(() => {
    getCards().then((data) => {
      setCards(data);
    });
  }, []);

  const options = [...new Set(cards.map((card) => card.featureCode))].map(
    (featureCode) => ({
      value: featureCode,
      label: featureCode,
    })
  );

  const options2 = [...new Set(cards.map((card) => card.countryCode))].map(
    (countryCode) => ({
      value: countryCode,
      label: countryCode,
    })
  );

  const filteredCards = cards.filter((card) => {
    if (featureCode && countryCode) {
      return (
        card.featureCode === featureCode.value &&
        card.countryCode === countryCode.value
      );
    } else if (featureCode) {
      return card.featureCode === featureCode.value;
    } else if (countryCode) {
      return card.countryCode === countryCode.value;
    } else {
      return true;
    }
  });

  return (
    <section>
      <div className="search-content">
        <div className="search-content-select">
          <Select className='select'
            options={options}
            value={featureCode}
            onChange={(selectedOption) => setFeatureCode(selectedOption)}
            placeholder="Feature Code"
          />
          <Select className='select'
            options={options2}
            value={countryCode}
            onChange={(selectedOption) => setCountryCode(selectedOption)}
            placeholder="Country Code"
          />
        </div>
      </div>

      <div className="card-grid-content">
        {filteredCards.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
