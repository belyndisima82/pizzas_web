import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isFetching } from '../../../redux/selectors/loading';


const mapStateToProps = (state) => ({
  isFetching: isFetching(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
