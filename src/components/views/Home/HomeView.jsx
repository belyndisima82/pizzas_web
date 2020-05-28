import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import FactsCarousel from '../../common/FactsCarousel';
import generalImages from '../../../img';
import './style.css';
import Helmet from 'react-helmet';


class Home extends Component {
  static propTypes = {
    setupHomeView: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { random, news } = this.props;
    window.prerenderReady = true;
    return (
      <div className="view-container home-view-container">
        <Helmet>
          <title>PizzaExpress | Your favourite one</title>
          <meta property="og:url" content="https://blooders.org" />
          <meta property="og:title" content="Your favourite one" />
          <meta property="og:description" content="Pizza Express Your favourite one." />
          <meta property="og:image" content={`https://blooders.org${generalImages.uberBanner}`} />
        </Helmet>
        <div className="landing-top-section landingImage">
          <div className="overlay">
            <Row className="header" type="flex" align="middle">
              <Col md={{ span: 18, offset: 3 }} className="text-div" align="center">
                <h3 className="white-text">A LITTLE BIT OF</h3>
                <h1 className="white-text">ITALY IN EVERY BITE</h1>
                <Link to="/ourpizzas" href="/ourpizzas">
                  <Button type="primary" className="btn-main-video btn-full btn-green btn-shadow btn-lg">try them all!</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
        <FactsCarousel />
      </div>
    );
  }
}


export default Home;
