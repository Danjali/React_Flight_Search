import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import {shallow, mount, render} from 'enzyme';
// import FlightData from './FlightData';
import { renderHook, act} from "@testing-library/react-hooks";
import {fetchFlightData} from "../api/api";

describe('<App/>', () => {
  // it('renders App', () => {
  //   // await act( async () => mount(<App />));
  //   // const wrapper = shallow(<App/>);
  //   expect(wrapper.find('.appHeader').text()).toEqual('Flight Search App');
  //   expect(wrapper.find('#flight-data').length).toEqual(1);
  // // });
  // let props;
  // let wrapper;
  // let useEffect;
  // let aa =[{},{}]
  // jest.mock("../api/api");
  // const mockUseEffect = () => {
  //   useEffect.mockImplementationOnce(f => {return aa});
  // };
  // useEffect = jest.spyOn(React, "useEffect");
  
//   it('renders App', () => { 
//     wrapper = render(<App {...props} />);
//     // mockUseEffect()
//     // mockUseEffect()

//     console.log(wrapper.debug())
//   });
//   it('should render names from API', async(done) => {
//     await act(async () => {
//       wrapper = shallow(<App {...props}/>);
//     });
//     console.log(wrapper.debug())
//     done();
// });
});