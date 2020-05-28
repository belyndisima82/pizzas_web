import React from 'react';
import { Carousel, Row } from 'antd';
import facts from '../../../constants/facts';
import FactsItem from '../../core/FactsItem';
import './style.css';


const FactsCarousel = () => (
  <Row id="FactsCarousel" className="full-width">
    <Carousel>
      {facts.map((fact) =>
        (<FactsItem
          img={fact.img}
          key={fact.id}
        />))
      }
    </Carousel>
  </Row>
);


export default FactsCarousel;
