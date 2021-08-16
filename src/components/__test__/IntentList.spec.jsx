import React from 'react';
import { shallow } from 'enzyme';
import IntentList from '../IntentList';
import IntentCard from '../IntentCard';
import useIntentList from '../useIntentList';
import { setStoreWithReactRedux } from '../../utils/getMockStore';

jest.mock('react-redux');
jest.mock('../useIntentList', () => jest.fn());

const mockHook = (mockData) => {
  useIntentList.mockReturnValue(mockData);
};

const name = 'test-name';
const trainingData = {
  messages: [{ id: 'a', text: 'test-a' }],
};
const reply = { id: 'replyiud', text: 'replyText' };

const initStore = {
  data: {
    intent: {
      intentList: [
        {
          id: '1',
          name,
          trainingData,
          reply,
        },
        {
          id: '2',
        },
      ],
    },
  },
  app: {
    intent: {
      selectedIntent: ['1'],
    },
  },
};

setStoreWithReactRedux(initStore);

describe('IntentList', () => {
  it('should render IntentList with valid UI', () => {
    const IntentListComponent = shallow(<IntentList />);
    expect(IntentListComponent.find('.intent-list')).toHaveLength(1);
    expect(IntentListComponent.find(IntentCard)).toHaveLength(2);
  });
});
