import React, { useState } from 'react';
import { Row, Col, Select } from 'antd';
import Continents from './Continents';
const { Option } = Select;

function Header(props) {
  const [continent, selectContinent] = useState('Asia');
  const [subContinent, selectSubContinent] = useState('');

  function handleContinent(value) {
    selectSubContinent('');
    selectContinent(value);
  }
  function handleSubContinent(value) {
    selectSubContinent(value);
  }

  return (
    <div>
      <div className="header">
        <Row>
          <Col span={12}>
            <label htmlFor="sel">
              <h3 style={{ display: 'inline-block', marginRight: '10px' }}>
                Select Continent
              </h3>
            </label>
            <Select
              id="sel"
              size="middle"
              defaultValue={continent}
              style={{ width: 120 }}
              onChange={handleContinent}
            >
              <Option value="Africa">Africa</Option>
              <Option value="Americas">Americas</Option>
              <Option value="Asia">Asia</Option>
              <Option value="Europe">Europe</Option>
              <Option value="Oceania">Oceania</Option>
            </Select>

            <label htmlFor="sel">
              <h3 style={{ display: 'inline-block', margin: '0 10px' }}>
                Subcontinent
              </h3>
            </label>
            <Select
              id="sel"
              size="middle"
              defaultValue={subContinent}
              style={{ width: 120 }}
              onChange={handleSubContinent}
            >
              {continent === 'Asia' ? (
                <>
                  <Option value="Western Asia">
                    Western Asia (Middle East)
                  </Option>
                  <Option value="South Asia">
                    South Asia (Indian subcontinent)
                  </Option>
                  <Option value="East Asia">East Asia (Far East)</Option>
                  <Option value="Southeast Asia">Southeast Asia</Option>
                </>
              ) : continent === 'Americas' ? (
                <>
                  <Option value="Northern America">Northern America</Option>
                  <Option value="South America">South America</Option>
                </>
              ) : continent === 'Europe' ? (
                <>
                  <Option value="Northern Europe">Northern Europe</Option>
                  <Option value="Southern Europe">Southern Europe</Option>
                </>
              ) : (
                <></>
              )}
            </Select>
          </Col>
          <Col span={12}>
            <h2>Explore Universe</h2>
          </Col>
        </Row>
      </div>
      <Continents continent={continent} subcontinent={subContinent} />
    </div>
  );
}
export default Header;
