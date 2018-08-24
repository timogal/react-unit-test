import React from 'react';
import { shallow } from 'enzyme';

import A from 'components/A';

describe('A test', function () {
  it('should render with no error', function () {
    const element = shallow(<A className="link">Link</A>);
    expect(element.is('.link'))
      .toBe(true);
    expect(element.contains('Link')).toBe(true);
  });
});