import React from 'react';
import App from './App';
import { renderHook, act} from "@testing-library/react-hooks";
import  * as FooModule from "../api/api";
import {flightData} from "../constants/constants"
describe('<App/>', () => {
  beforeEach(async() => {

  });
  
  it('renders App', async() => { 
    console.log(FooModule.fetchFlightData)
    const response = await FooModule.fetchFlightData();
    let responseData = {
      data: flightData,
      uniqueCity: {value: 'Pune', label: 'Pune'}
    }
    FooModule.fetchFlightData = jest.fn().mockReturnValue(responseData);
    const aa = await act(async () => renderHook(() => App()));
  });
});