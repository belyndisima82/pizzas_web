import React from 'react';
import { shallow } from 'enzyme';
import AppointmentCard from '../components/core/AppointmentCard';

describe('AppointmentCard component', () => {
  const props = {
    status: 0,
    cancel: jest.fn(),
    modify: jest.fn(),
  };
  const wrapper = shallow(<AppointmentCard {...props} />);

  it('should modify appointment if button modify is clicked', () => {
    wrapper.find('#modify').simulate('click');
    expect(props.modify.mock.instances.length).toBe(1);
  });
  it('should cancel appointment if button cancel is clicked', () => {
    wrapper.find('#cancel').simulate('click');
    expect(props.cancel.mock.instances.length).toBe(1);
  });
});