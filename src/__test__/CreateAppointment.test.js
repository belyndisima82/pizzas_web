import React from 'react';
import { shallow } from 'enzyme';
import Appointment from '../components/appointment/Appointment';
import configureStore from 'redux-mock-store';

describe('Appointment component', () => {
  const initialState = {};
  const mockStore = configureStore();
  const props = {
    getToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mjk2NywiZXhwIjoxNTU2ODk3NzMxNDQ4fQ.afo8Doter0MkMecnvZMsXGIYgUi1G3diBh4D_EfL_ZU',
    onSubmitAppointment: jest.fn(),
    hospitalName: 'Banco de Sangre de Prueba',
    fetchHospital: jest.fn(),
  };
  const store = mockStore(initialState);
  const wrapper = shallow(<Appointment {...props} store={store} />);

  it('should create an appointment if button submitAppointment is clicked', () => {
    wrapper.find('#submitAppointment').simulate('click');
    expect(Object.keys(props.onSubmitAppointment.mock.calls[0][0])).toEqual(['idSchedule']);
  });
});
