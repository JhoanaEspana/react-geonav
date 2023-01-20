import { useEffect } from 'react';
import { useState } from 'react';
import { CardItem } from './CardItem';

const getCards = async () => {
  const URL ='https://geocoding-api.open-meteo.com/v1/search?name=new%20york&count=100';
  const resp = await fetch(URL);
  const data = await resp.json();

  const datas = data.results;
  // console.log(datas);

  const cards = datas.map((card) => ({
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

  // console.log(cards);
  return cards;
};

export const CardGrid = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <section>
      <div>
        {cards.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
