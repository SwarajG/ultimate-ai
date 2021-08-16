import React from 'react';
import { shallow } from 'enzyme';
import ExpressionModal from '../ExpressionModal';
import { setStoreWithReactRedux } from '../../utils/getMockStore';

jest.mock('react-redux');

describe('ExpressionModal', () => {
  const onClose = jest.fn();
  const props = {
    isModalOpen: false,
    id: '1',
    onClose,
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
  };

  setStoreWithReactRedux(initStore);

  it('should render ExpressionModal with valid UI', () => {
    const ExpressionModalComponent = shallow(<ExpressionModal {...props} />);
    expect(ExpressionModalComponent.find('.modal__title')).toHaveLength(1);
    expect(ExpressionModalComponent.find('.modal__content').at(0).find('p').at(1).text()).toEqual(name);
    expect(ExpressionModalComponent.find('.modal__content').at(1).find('p').at(1).text()).toEqual(reply.text);
    expect(ExpressionModalComponent.find('.modal__expression-text')).toHaveLength(trainingData.messages.length);
  });

  it('should handle close event', () => {
    const ExpressionModalComponent = shallow(<ExpressionModal {...props} />);
    ExpressionModalComponent.find('.close').simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});
