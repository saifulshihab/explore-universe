import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'antd';
import Countrydetails from './CountryDetails';
// import { EyeOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Continents(props) {
  const [data, setData] = useState([]);
  const [details, setDeatils] = useState(false);
  const [country, setCountry] = useState('');

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/${props.continent}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => alert(error));
  }, [props.continent, props.subcontinent]);

  const filterContinent = data.filter((d) => {
    return props.subcontinent !== ''
      ? props.subcontinent.toLowerCase().toString() ===
          d.subregion.toLowerCase().toString()
      : d;
  });

  function detailsHandler(name) {
    if (!details) {
      setDeatils(true);
    }
    setCountry(name);
  }

  return (
    <div>
      <Row>
        <Col span={details ? 12 : 24}>
          {filterContinent.map((continent, index) => (
            <Col key={index} style={{ display: 'inline-block' }} span={3}>
              <Card
                onClick={() => detailsHandler(continent.name)}
                style={{ width: '95%', cursor: 'pointer' }}
                cover={<img alt={continent.name} src={continent.flag} />}
                /* actions={[<EyeOutlined />]} */
              >
                <Meta title={continent.name} />
                {continent.cioc}
              </Card>
            </Col>
          ))}
        </Col>
        {details ? <Countrydetails country={country} /> : <></>}
      </Row>
    </div>
  );
}

export default Continents;
