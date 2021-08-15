import useIntentList from './useIntentList';
import IntentCard from './IntentCard';

export default function IntentList() {
  const { data } = useIntentList();
  if (!data) {
    return null;
  }
  return (
    <div className="intent-list">
      {data.map((info) => (
        <IntentCard key={info.id} {...info} />
      ))}
    </div>
  );
}
