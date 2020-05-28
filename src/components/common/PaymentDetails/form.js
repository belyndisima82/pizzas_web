import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { paymentInfo, deleteItem } from '../../../redux/actions/payment';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    paymentInfo,
    deleteItem,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);