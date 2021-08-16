import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { getIntentList } from './slice/dataSlice';
import './styles/ExpressionModal.css';

export default function ExpressionModal({ isModalOpen, id, onClose }) {
  const list = useSelector(getIntentList);
  const { name, trainingData, reply } = list.find(({ id: value }) => id === value);
  const questionList = trainingData.messages || trainingData.expressions;
  return (
    <Modal isOpen={isModalOpen} onRequestClose={onClose} closeTimeoutMS={250} className="modal">
      <span className="close" onClick={onClose}>
        X
      </span>
      <h1 className="modal__title">Intent data</h1>
      <div className="modal__content modal__content--one-line">
        <p className="modal__content-title">Intent: </p>
        <p>{name}</p>
      </div>
      <div className="modal__content modal__content--one-line">
        <p className="modal__content-title">Answer: </p>
        <p>{reply.text}</p>
      </div>
      <div className="modal__content">
        <p className="modal__content-title">Expressions: </p>
        {questionList.map(({ id, text }) => (
          <div key={id}>
            <p className="modal__expression-text">{text}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
}
