import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import './style.css';

class Loading extends Component {
static propTypes = {
  isFetching: PropTypes.bool,
  path: PropTypes.string,
};

static defaultProps = {
  isFetching: true,
  path: null,
};

componentDidMount() {

}

render() {
  return (
    <div>
      { this.props.isFetching && this.props.path !== '/' ?
        <Row className="view-container phantom-background loading" type="flex" justify="space-around" align="middle">
          <Col xs={{span:12, offset:8}} md={{span:12, offset:8}} align="middle">
            <img src='https://media.giphy.com/media/69pvVOtbvKbKSeBHJm/giphy.gif' alt="drop" />
          </Col>
        </Row> : null
      }
    </div>
    
  );
}
}

export default Loading;
