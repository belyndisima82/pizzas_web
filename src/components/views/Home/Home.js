import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setupHomeView } from '../../../redux/actions/session';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setupHomeView,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
