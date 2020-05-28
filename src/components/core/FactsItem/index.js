  
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './style.css';


const Item = (props) => (
  <Row style={{ backgroundImage: `url(${props.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} type="flex" align="middle" className="carousel-item">
    <Col className="padding-facts" xs={24} md={{ span:12, offset: 12 }}>
      <h3 className="fact-text" >{props.text}</h3>
    </Col>
  </Row>
);


Item.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};


export default Item;