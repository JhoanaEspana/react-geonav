import React, { useState } from 'react';
import Select from 'react-select';

export const Search = ({ cards }) => {
  const [featureCode, setFeatureCode] = useState();
  const [countryCode, setCountryCode] = useState();

  const options = cards.map((card) => ({
    value: card.featureCode,
    label: card.featureCode,
  }));

  const options2 = cards.map((card) => ({
    value: card.countryCode,
    label: card.countryCode,
  }));

  return (
    <div>
      <Select
        options={options}
        value={featureCode}
        onChange={(selectedOption) => setFeatureCode(selectedOption)}
        placeholder="Feature Code"
      />
      <Select
        options={options2}
        value={countryCode}
        onChange={(selectedOption) => setCountryCode(selectedOption)}
        placeholder="Country Code"
      />
    </div>
  );
};


