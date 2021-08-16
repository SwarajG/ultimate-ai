import useIntentList from './useIntentList';
import IntentCardSkelton from './IntentCardSkelton';
import IntentCard from './IntentCard';
import './styles/IntentList.css';

export default function IntentList() {
  const { data, selectedIntentList, onSelectAllToggle } = useIntentList();

  if (!data.length) {
    const list = Array.from({ length: 14 }, (_, i) => i);
    return (
      <div className="intent-list intent-list--loading">
        {list.map((_, i) => (
          <IntentCardSkelton key={`${i}-id`} />
        ))}
      </div>
    );
  }

  return (
    <div className="intent-page">
      <div className="round round-left">
        <input
          type="checkbox"
          id="select-all"
          checked={selectedIntentList.length === data.length ? 'checked' : ''}
          onChange={onSelectAllToggle}
        />
        <label htmlFor="select-all" />
        <p className="round-label">Select all</p>
      </div>
      <div className="intent-list">
        {data.map((info) => (
          <IntentCard key={info.id} {...info} isSelected={selectedIntentList.includes(info.id)} />
        ))}
      </div>
    </div>
  );
}
