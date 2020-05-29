import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setupPizzasView, setOrderList } from '../../../redux/actions/session';
import { selectAllPizzas } from '../../../redux/selectors/pizzas';

const mapStateToProps = (state) => ({
  pizzas: selectAllPizzas(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setupPizzasView,
    setOrderList,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);