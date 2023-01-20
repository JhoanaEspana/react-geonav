export const getCards = async () => {
  const URL ='https://geocoding-api.open-meteo.com/v1/search?name=new%20york&count=100';
  const resp = await fetch(URL);
  const data = await resp.json();

  const datas = data.results;
  // console.log(datas);

  const cards = datas.map((card) => ({
    name: card.name,
    latitude: card.latitude,
    longitude: card.longitude,
    timezone: card.timezone,
    country_code: card.country_code,
    admin1: card.admin1,
    admin2: card.admin2,
    admin3: card.admin3,
  }));

  console.log(cards);
  return cards;
};