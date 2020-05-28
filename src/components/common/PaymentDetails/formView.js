import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form, Input } from 'antd';
import { Map as ImmutableMap } from 'immutable';

import './style.css';

class FormView extends Component {
    static defaultProps = {
        order: [],
    };

    static propTypes = {
        paymentInfo: PropTypes.func.isRequired,
        order: ImmutableMap(),
        deleteItem: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onDeleteItem = (e, id) => {
        e.preventDefault();
        this.props.deleteItem(id);
    }

    onSubmitInfo = (e) => {
        const {
            address,
        } = this.state;
        e.preventDefault();
        this.props.paymentInfo({
            address,
        });
        this.setState({
            email: null,
            name: null,
            address: null,
            phone: null,
        })
    }

    onChangeValue = (holder, newValue) => {
        this.setState({
            [holder]: newValue,
        });
    }

    render() {
        return (
            <div className="form">
                <Row>
                    { this.props.order.size ? 
                    <div className="section">
                        <Row gutter={16} type="flex" className="top-margin">
                            <Col md={24} align="center">
                                <h1>Your Check!</h1>
                                <p>Delivery will take us up to 45min</p><br />
                            </Col>
                        </Row>
                        {this.props.order.map((item) => (
                            item.get('quantity') ?
                            <Row>
                                <Col md={3}>
                                    <img src={item.get('image')} style={{width: 100}} alt="pizza" />
                                </Col>
                                <Col md={4}>
                                    <span>Quantity: {item.get('quantity')}</span><br />
                                    <span>Price: ${item.get('price')}</span><br />
                                    <span>Amount: ${item.get('price') * item.get('quantity')}</span>
                                </Col>
                                <Col md={3}>
                                    <Button onClick={(e) => { this.onDeleteItem(e, item.get('id')) }} type="submit" className="ant-btn btn-green btn-shadow btn-lg ant-btn-primary full-width" >{item.get('quantity') > 1 ? 'Drop 1 off': 'Delete item'}</Button>
                                </Col>
                            </Row> : null
                        ))
                        }
                        { this.props.order.size ?
                        <Row gutter={16} type="flex" className="top-margin">
                            <Col align="left">
                                <h2>Give us your details!</h2>
                            </Col>
                        </Row> : null
                        }
                        { this.props.order.size ?
                        <Row gutter={16} type="flex">
                            <Form className="full-width" layout="inline" align="center">
                                <Col md={4}>
                                    <Input value={this.state.name} classNname="ant-input" placeholder="Name" onChange={(e) => this.onChangeValue('name', e.target.value)} style={{ height: '48px' }} />
                                </Col>
                                <Col md={4}>
                                    <Input value={this.state.phone} placeholder="Mobile" onChange={(e) => this.onChangeValue('phone', e.target.value)} style={{ height: '48px' }} />
                                </Col>
                                <Col md={4}>
                                    <Input type="email" value={this.state.email} placeholder="eMail" onChange={(e) => this.onChangeValue('email', e.target.value)} style={{ height: '48px' }} />
                                </Col>
                                <Col md={4}>
                                    <Input value={this.state.address} placeholder="Address" onChange={(e) => this.onChangeValue('address', e.target.value)} style={{ height: '48px' }} />
                                </Col>
                                <Col md={8}>
                                    <Button onClick={(e) => { this.onSubmitInfo(e) }} type="submit" className="ant-btn btn-green btn-shadow btn-lg ant-btn-primary full-width">Submit Order</Button>
                                </Col>
                            </Form>
                        </Row> 
                        : null
                        }
                    </div> :
                    null
                    }
                </Row>
            </div>
        )
    };
}

export default FormView;