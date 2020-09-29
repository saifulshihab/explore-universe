import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'antd';
// import { EyeOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Continents(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/${props.continent}`)
      .then((res) => {
        setData(res.data);       
      });
  }, [props.continent]);

  return (
    <div>
      <Row>
        {data.map((continent, index) => (
          <Col key={index} span={4}>
            <Card
              style={{ width: 300 }}
              cover={<img alt={continent.name} src={continent.flag} />}
              /* actions={[<EyeOutlined />]} */
            >
              <Meta
                title={continent.name}
                description="This is the description"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Continents;
