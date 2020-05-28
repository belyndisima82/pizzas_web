import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Row } from 'antd';
import './style.css';


const RegularCard = ({
  children, thumb, thumbBody, callToAction, grid, height, overlay, onBuy,
  padding,
}) => (
  <Col xs={grid.xs} sm={grid.sm} md={grid.md} style={{ height, padding }} key={thumbBody.id}>
    <div className="card">
      {thumb ?
        <div
          style={{ backgroundImage: `url("${thumb}")` }}
          src={thumb}
          alt="Card Thumb"
          className="card-top"
        >
          {thumbBody ?
            <div className={overlay}>
              <div className="card-header-desc">
                <p className="header">{thumbBody.name}</p>
                <p className="book font-14">${thumbBody.price}</p>
              </div>
            </div>
            :
            undefined
          } 
        </div>
        :
        undefined
      }
      <div className='card-body'>
        <Row type="flex" justify="center" align="middle" className='text-center'>
          {children}
        </Row>
        <Row type="flex" justify="center">
          <Button onClick={(e) => {
             e.preventDefault();
             onBuy(thumbBody)
          }} 
            type="primary" 
            className="btn-green btn-shadow btn-round btn-lg full-width">
            {callToAction}
          </Button>
        </Row>
      </div>
    </div>
  </Col>
);


RegularCard.defaultProps = {
  callToAction: undefined,
  thumbBody: undefined,
  grid: {
    xs: 24,
    sm: 12,
    md: 8,
  },
  height: 362,
  overlay: 'transparent-overlay',
  padding: 10,
};


RegularCard.propTypes = {
  children: PropTypes.element.isRequired,
  thumbBody: PropTypes.object,
  grid: PropTypes.object,
  overlay: PropTypes.string,
  thumb: PropTypes.string.isRequired,
  height: PropTypes.number,
  callToAction: PropTypes.string,
  onBuy: PropTypes.func.isRequired,
  padding: PropTypes.number,
  path: PropTypes.string,
};


export default RegularCard;
