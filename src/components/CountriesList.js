import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function CountriesList(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  return (
    <div className="col-5 " style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
              <h3>
                <Link
                    to={`/${country.alpha3Code}`}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontSize: '0.8rem',
                  }}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="flag"
                    style={{ width: '40px' }}
                />
                <br/>
                    {country.name.common}
                </Link>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;