import PropTypes from 'prop-types';
import ExpressionModal from './ExpressionModal';
import './styles/IntentCard.css';
import useIntentCard from './useIntentCard';

export default function IntentCard({ id, description, name, trainingData, isSelected }) {
  const { isModalOpen, onModalClose, onModalOpen, onCheckChange } = useIntentCard({ isSelected, id });
  return (
    <div className="intent-card">
      <div className="round">
        <input type="checkbox" id={id} checked={isSelected ? 'checked' : ''} onChange={onCheckChange} />
        <label htmlFor={id} />
      </div>
      <p className="intent-card__title">
        <span>Intent: </span> {name}
      </p>
      <p className="intent-card__description">
        <span>Description:</span> {description}
      </p>
      <div className="intent-card__expression-list">
        <p className="intent-card__expression-title">Expressions: </p>
        {(trainingData.messages || trainingData.expressions).slice(0, 1).map(({ id, text }) => (
          <p key={id} className="intent-card__expression">
            {text}
          </p>
        ))}
      </div>
      <p className="intent-card__see-more" onClick={onModalOpen}>
        See more
      </p>
      <ExpressionModal isModalOpen={isModalOpen} id={id} onClose={onModalClose} />
    </div>
  );
}

const messageShape = PropTypes.shape({
  id: PropTypes.string,
  text: PropTypes.string,
});

IntentCard.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  isSelected: PropTypes.bool,
  trainingData: PropTypes.oneOfType([
    PropTypes.shape({
      messages: PropTypes.arrayOf(messageShape),
    }),
    PropTypes.shape({
      expressionCount: PropTypes.number,
      expressions: PropTypes.arrayOf(messageShape),
    }),
  ]),
};
