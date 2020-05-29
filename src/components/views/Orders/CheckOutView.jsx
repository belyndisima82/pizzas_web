import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import PaymentDetails from '../../common/PaymentDetails';
import { Map as ImmutableMap } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import './style.css';


class Checkout extends Component {
  static propTypes = {
    setupHomeView: PropTypes.func.isRequired,
    getOrder: PropTypes.func.isRequired,
    order: ImmutablePropTypes.map,
  };

  static defaultProps = {
    order: ImmutableMap(),
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getOrder()
  }


  render() {
    window.prerenderReady = true;
    return (
      <div className="view-container home-view-container">
        <div className="landing-top-section landingImage">
          <div className="overlay">
            <Row className="header" type="flex" align="middle">
            {this.props.order.size ? 
              <Col md={{ span: 18, offset: 3 }} className="text-div" align="center">
                <h3 className="white-text">HERE IS YOUR ORDER!!</h3>
                <h1 className="white-text">ENJOY YOURSELF!!</h1>
              </Col>
                :
              <Col md={{ span: 18, offset: 3 }} className="text-div" align="center">
                <h3 className="white-text">YOUR CAR IS EMPTY!!</h3>
                <Link to="/ourpizzas" href="/ourpizzas">
                  <Button type="primary" className="btn-main-video btn-full btn-green btn-shadow btn-lg">pick a pizza!</Button>
                </Link>
              </Col>
                }
            </Row>
          </div>
        </div>
        <PaymentDetails 
          order={this.props.order}/>
      </div>
    );
  }
}


export default Checkout;
