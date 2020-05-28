import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map as ImmutableMap } from 'immutable';
import { Select, Row } from 'antd';
import Helmet from 'react-helmet';
import RegularCard from '../../core/RegularCard';
import generalImages from '../../../img';
import './style.css';


const { Option } = Select;

class Search extends Component {
  static defaultProps = {
    pizzas: ImmutableMap(),
  };


  static propTypes = {
    setupPizzasView: PropTypes.func.isRequired,
    pizzas: ImmutablePropTypes.list,
    openModal: PropTypes.func.isRequired,
    setOrderList: PropTypes.func.isRequired,
  };


  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount() {
    this.props.setupPizzasView();
  }

  onBuy = (data) => {
    this.props.setOrderList(data);
  }


  onOpenChooseSignUpMethod = () => {
    this.setState({
      isVisible: true,
    });
    this.props.openModal('chooseSignUpMethod');
  }


  render() {
    const { pizzas } = this.props;
    const slideStyle = { backgroundImage: `url('${generalImages.pizza}')` };
    const pizzasList = pizzas.toList();
    window.prerenderReady = true;
    return (
      <div className="view-container search-view background-view">
        <Helmet>
          <title>Pizza Express | Our pizzas</title>
          <meta property="og:url" content="https://pizzaexpress/ourpizzas" />
          <meta property="og:title" content="Your pizza." />
          <meta property="og:description" content="Pick your favourite" />
        </Helmet>
        <div style={slideStyle} className="slide">
          <div className="overlay"></div>
        </div>
        <div className="container">
        <Row className="section">
        {pizzasList.map((pizza) => (
              <RegularCard
                thumb={pizza.get('imageUrl')}
                thumbBody={{ 
                  name: pizza.get('name'), 
                  price: pizza.get('price'), 
                  id: pizza.get('id'), 
                  image: pizza.get('imageUrl') }}
                callToAction={`Add to cart`}
                key={pizza.get('id')}
                onBuy={this.onBuy}
              />
                ))
          }
        </Row>
          
        </div>
      </div>
    );
  }
}


export default Search;