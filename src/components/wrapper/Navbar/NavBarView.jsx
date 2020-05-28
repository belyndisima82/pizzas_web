import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Icon, Menu } from 'antd';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map as ImmutableMap } from 'immutable';
import './style.css';
import generalImages from '../../../img';


class Navbar extends Component {

  static propTypes = {
    getOrder: PropTypes.func.isRequired,
    order: ImmutablePropTypes.map,
  };

  static defaultProps = {
    order: ImmutableMap(),
  };

  constructor(props) {
    super(props);
    this.state = {
      visibleMenu: false,
    };
  }

  componentDidMount() {
    this.props.getOrder()
  }


  hide = () => {
    this.setState({
      visible: false,
      isVisible: false,
    });
  }

  showMenu = () => {
    this.setState({ visibleMenu: true });
  }

  hideMenu = () => {
    this.setState({ visibleMenu: false });
  }


  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }



  render() {
    let orderSize = this.props.order.reduce((acc, item) => acc + item.get('quantity'), 0);
    let linkStyle = {};
    let logoOffset = 0;
    let logoMobileOffset = 0;
    let logoSpan = 20;
    let logoMobileSpan = 18;
    const popOverContent = (
      <div>
        <Menu mode="inline" onClick={this.hide}>
          <Menu.Item key="home"><Link to="/" href="/">Home</Link></Menu.Item>
          <Menu.Item><Link to="/" href="/">Our Pizzas</Link></Menu.Item>
          <Menu.Item><Link to="/" href="/">Orders</Link></Menu.Item>
        </Menu>
      </div>
    );

    return (
      <div className="navbar-row container-fluid">
        <div id="navbar-popover" overlayClassName="popover-menu" placement="topLeft" content={popOverContent} trigger="click" onClick={this.showMenu}>
          <Icon type="menu" className="nav-phone-icon" style={{ color: linkStyle.color ? 'white' : '' }} />
        </div>

        <Col md={{ span: logoSpan, offset: logoOffset }} sm={{ span: logoMobileSpan, offset: logoMobileOffset }}>
          <nav className="navbar navbar-light">
            <Col xs={4} md={2}>
              <Link className="navbar-brand" to="/" href="/">
                <img src={generalImages.redLogo} alt="Pizza express" />
              </Link>
            </Col>
            <Col className="ant-col-xs-0 ant-col-lg-20 navbar-right">
              <ul className="navbar-nav pull-right">
                <li className="nav-item active">
                  <Link to="/" href="/" style={linkStyle}>Home</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/ourpizzas" href="/ourpizzas" style={linkStyle}>Our Pizzas</Link>
                </li>
                <li className="nav-item active wrapper">
                  <Link to="/orders" href="/orders" className="cart" style={linkStyle}>
                    <img src={generalImages.cart} alt="Pizza car" />
                    <p className="bottom-right">{orderSize}</p>
                  </Link>
                </li>
              </ul>
            </Col>
          </nav>
        </Col>
      </div>
    );
  }
}

export default Navbar;
