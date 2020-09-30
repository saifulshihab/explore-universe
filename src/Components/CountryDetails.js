import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Divider } from 'antd';
import numeral from 'numeral';

function Countrydetails(props) {
  const [countryDetails, setCD] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${props.country}`)
      .then((res) => {
        setCD(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [props.country]);

  return (
    <>
      <Col span={12}>
        <div className="country__details">
          {countryDetails.map((d, idx) => (
            <div key={idx}>
              <div className="flag">
                <img src={d.flag} alt={d.name} />
              </div>
              <Divider />
              <h1>{d.name}</h1>
              <h3>Capital: {d.capital}</h3>
              <div className="country_additional_info">
                <p className="title">Region : </p>{' '}
                <p className="val">{d.region}</p>
              </div>
              <div className="country_additional_info">
                <p className="title">Subregion : </p>{' '}
                <p className="val">{d.subregion}</p>
              </div>
              <div className="country_additional_info">
                <p className="title">Demonym : </p>{' '}
                <p className="val">{d.demonym}</p>
              </div>
              <div className="country_additional_info">
                <p className="title">Population : </p>{' '}
                <p className="val">{numeral(d.population).format('0.0a')}</p>
              </div>
              <div className="country_additional_info">
                <p className="title">Timezone : </p>{' '}
                <p className="val">
                  {d.timezones.map((d, idx) => (
                    <span key={idx} className="ainfo">
                      {d}
                    </span>
                  ))}
                </p>
              </div>
              <div className="country_additional_info">
                <p className="title">Area : </p>{' '}
                <p className="val">{numeral(d.area).format('0,0')}</p>
              </div>
              <div className="country_additional_info">
                <p className="title">Native Name : </p>{' '}
                <p className="val">{d.nativeName}</p>
              </div>
              <div className="country_additional_info">
                <p className="title">Currency : </p>{' '}
                <p className="val">
                  {d.currencies.map((d, idx) => (
                    <>
                      <span className="ainfo">Code: {d.code},</span>
                      <span className="ainfo">Name: {d.name},</span>
                      <span className="ainfo">Symbol: {d.symbol}</span>
                    </>
                  ))}
                </p>
              </div>
              <div className="country_additional_info">
                <p className="title">Language : </p>{' '}
                <p className="val">
                  {d.languages.map((d, idx) => (
                    <>
                      <span className="ainfo">iso639_1: {d.iso639_1},</span>
                      <span className="ainfo">iso639_2: {d.iso639_2},</span>
                      <span className="ainfo">Name: {d.name},</span>
                      <span className="ainfo">Native Name: {d.nativeName}</span>
                    </>
                  ))}
                </p>
              </div>
              <div className="country_additional_info">
                <p className="title">Regional Blocks : </p>
                <p className="val">
                  {d.regionalBlocs.map((d, idx) => (
                    <>
                      <span className="ainfo">Acronym: {d.acronym},</span>
                      <span className="ainfo">Name: {d.name},</span>
                      <span className="ainfo">
                        Other Acronyms: {d.otherAcronyms}
                      </span>
                    </>
                  ))}
                </p>
              </div>
              <div className="country_additional_info">
                <p className="title">Chief Information Officers Council : </p>
                <p className="val">{d.cioc}</p>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </>
  );
}
export default Countrydetails;
