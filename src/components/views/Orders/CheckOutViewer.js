import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrder } from '../../../redux/actions/payment';
import { order } from '../../../redux/selectors/payment';

const mapStateToProps = (state) => ({
  order: order(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getOrder,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
