import React, { useState } from 'react';
import { Row, Col, Select } from 'antd';
import Continents from './Continents';
const { Option } = Select;

function Header(props) {
  const [continent, selectContinent] = useState('Asia');

  function handleChange(value) {
    selectContinent(value);
  }
  return (
    <div>
      <Row>
        <Col span={12}>
          <Select
            defaultValue={continent}
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="Africa">Africa</Option>
            <Option value="Americas">Americas</Option>
            <Option value="Asia">Asia</Option>
            <Option value="Europe">Europe</Option>
            <Option value="Oceania">Oceania</Option>
          </Select>
        </Col>
        <Col span={12}>Explore Universe</Col>
      </Row>
      <Continents continent={continent} />
    </div>
  );
}
export default Header;
