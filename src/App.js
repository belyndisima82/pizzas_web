import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createHistory from './history';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import sagas from './redux/sagas';
import Home from './components/views/Home';
import Navbar from './components/wrapper/Navbar';
import Footer from './components/wrapper/Footer';
import './style/core.css';
import Pizzas from './components/views/Pizzas';
import Orders from './components/views/Orders';
import Loading from './components/wrapper/Loading';


if (!window.fetch) {
  const whatwg = require('whatwg-fetch');
}

// const history = createHistory();
const history = createHistory;
const middleware = routerMiddleware(history);


const App = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store =
    createStore(
      combineReducers({
        ...reducers,
        router: routerReducer,
      }),
      {},
      composeEnhancers(applyMiddleware(sagaMiddleware, ReduxThunk, middleware)),
    );
  sagaMiddleware.run(sagas);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <div>
            <Navbar />
            <Loading />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/ourpizzas" component={Pizzas} />
              <Route exact path="/orders" component={Orders} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  );
};


class ScrollToTop extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

export default App;
