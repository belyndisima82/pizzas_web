import React from 'react';
import { shallow } from 'enzyme';
import BloodRaisingCard from '../components/bloodRaising/Form';
import {
  fromJS,
} from 'immutable';

describe('BloodRaising component', () => {
  const props = {
    getToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mjk2NywiZXhwIjoxNTU2ODk3NzMxNDQ4fQ.afo8Doter0MkMecnvZMsXGIYgUi1G3diBh4D_EfL_ZU',
    requestAddCampaign: jest.fn(),
    states: fromJS([
      { idState: 1, state: 'Aguascalientes' },
      { idState: 19, state: 'Nuevo León' },
    ]),
    hospitals: fromJS([
      {
        hospital:{
          registered: 1,
          lng: -100.341003,
          name: 'Banco de Sangre de Prueba',
          phone: '(81) 83 93 13 23',
          idHospital: 10,
        },
        schedule:[],
      },
      {
        hospital:{
          registered: 0,
          lng: -100.341003,
          name: 'Ginequito 2',
          phone: '81228122',
          idHospital: 15,
        },
        schedule:[],
      },
    ]),
    onChangeState: jest.fn(),
    openModal: jest.fn(),
    onBookNeed: jest.fn(),
    errorMessages: jest.fn(),
    idState: '19',
  };
  let wrapper;
  it('should create a campaign if button submit is clicked', () => {
    wrapper = shallow(<BloodRaisingCard {...props} />).dive();
    wrapper.setState({
      blobImage: { size: 26675, type: 'image/png' },
      hospitalPicked: '10',
      blood: 'true',
    });
    wrapper.find('#bloodType').simulate('change', '3');
    wrapper.find('#donor').simulate('change', '2');
    wrapper.find('#fechaNacimiento').simulate('change', { target: { name: 'birthdayPicked', value: '1982/10/06' } });
    wrapper.find('#phonePicked').simulate('change', { target: { name: 'phonePicked', value: '1307991' } });
    wrapper.find('#namePicked').simulate('change', { target: { name: 'namePicked', value: 'Belinda' } });
    wrapper.find('#hobbiesPicked').simulate('change', { target: { name: 'hobbiesPicked', value: 'Pasatiempos' } });
    wrapper.find('#whyPicked').simulate('change', { target: { name: 'whyPicked', value: 'Cosas' } });
    wrapper.find('#state').simulate('change', '19');
    wrapper.find('#createNeed').simulate('submit');
    expect(Object.keys(props.requestAddCampaign.mock.calls[0][0])).toEqual(['need', 'image']);
  });
});
