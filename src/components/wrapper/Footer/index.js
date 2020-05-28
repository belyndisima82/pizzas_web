import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import appStore from '../../../img/app_store.png';
import playStore from '../../../img/google_play.png';
import './style.css';


class Footer extends Component {
  componentDidMount() {

  }

  render() {
    if (!this.props.location.pathname.includes('/dashboard')) {
      return (
        <div className="phantom gray-background">
          <div className="container">
            <Row className="section footer">
              <Col className="apps" xs={24} sm={24} md={6}>
                <p className="title">Download PizzaExpress</p>
                  <img src={appStore} alt="App Store" />
                  <img src={playStore} alt="Play store" />
              </Col>
              <Col xs={24} sm={24} md={7}>
                <p className="title">Web</p>
                <Link to="/" href="/"><p>Home</p></Link>
                <Link to="/ourpizzas" href="/ourpizzas"><p>Our pizzas</p></Link>
                <Link to="/orders" href="/orders"><p>Order</p></Link>
              </Col>
              <Col xs={24} sm={24} md={5}>
              </Col>
              <Col className="social" xs={{ span: 24 }} sm={24} md={6}>
                <p className="title">Social Network</p>
                <Col md={6} xs={4}>
                  <Button className="btn-shadow facebook-share-icon"></Button>
                </Col>
                <Col md={6} xs={4}>
                  <Button className="btn-shadow twitter-share-icon"></Button>
                </Col>
                <Col md={6} xs={4}>
                  <Button className="btn-shadow instagram-share-icon"></Button>
                </Col>
                <Col md={6} xs={4}>
                  <Button className="btn-shadow whatsapp-share-icon"></Button>
                </Col>
                <Col md={0} xs={4}>
                  <Button className="btn-shadow messenger-share-icon"></Button>
                </Col>
              </Col>
            </Row>
            <Row className="final-footer text-center" type="flex">
              <Col md={{ span:6, offset:9 }} xs={24}>
                <p>Copyright © 2019 PizzaExpress</p><br />
              </Col>
            </Row>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default withRouter(Footer);
