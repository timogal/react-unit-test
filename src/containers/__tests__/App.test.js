import React from 'react';
import { shallow, mount } from 'enzyme';
import App from 'containers/App';

describe('<App/>', () => {
  it('should render with no error', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).not.toBe(null);
  });

  it('should contains hello world', () => {
    const wrapper = mount(<App />);

    expect(wrapper.contains('<h1>Hello world!</h1>'));
  });
});