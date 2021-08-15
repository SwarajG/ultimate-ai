import React from 'react';
import { shallow } from 'enzyme';
import IntentList from '../IntentList';
import IntentCard from '../IntentCard';
import useIntentList from '../useIntentList';

jest.mock('../useIntentList', () => jest.fn());

const mockHook = (mockData) => {
  useIntentList.mockReturnValue(mockData);
};

describe('IntentList', () => {
  it('should render IntentList with valid UI', () => {
    mockHook({ data: null });
    let IntentListComponent = shallow(<IntentList />);
    expect(IntentListComponent.find('.intent-list')).toHaveLength(0);
    mockHook({ data: [{ id: '1' }, { id: '2' }] });
    IntentListComponent = shallow(<IntentList />);
    expect(IntentListComponent.find('.intent-list')).toHaveLength(1);
    expect(IntentListComponent.find(IntentCard)).toHaveLength(2);
  });
});
