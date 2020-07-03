import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {shallow, mount} from 'enzyme';
import FlightData from './FlightData';
import { renderHook, act} from "@testing-library/react-hooks";

describe('<App/>', () => {
  it('renders App', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.appHeader').text()).toEqual('Flight Search App');
    expect(wrapper.find('#flight-data').length).toEqual(1);
  });

  const mockFetch = (mockData) => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
  };

  const mockFetchCleanUp = () => {
    global.fetch.mockClear();
    delete global.fetch;
  };

  it('api call mocking',async() => {
    mockFetch({dd:{ddd:'dsd'}});
    const { result, waitForNextUpdate } = renderHook(() => App());
    await waitForNextUpdate();
    mockFetchCleanUp();
  })
});