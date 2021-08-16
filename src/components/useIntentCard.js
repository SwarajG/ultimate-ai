import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedIntentList, removeIntentFromSelection } from './slice/appSlice';

export default function useIntentCard({ isSelected, id }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState();
  const onModalClose = () => {
    setIsModalOpen(false);
  };
  const onModalOpen = () => {
    setIsModalOpen(true);
  };
  const onCheckChange = () => {
    if (isSelected) {
      dispatch(removeIntentFromSelection(id));
    } else {
      dispatch(setSelectedIntentList(id));
    }
  };
  return {
    isModalOpen,
    onModalClose,
    onModalOpen,
    onCheckChange,
  };
}
