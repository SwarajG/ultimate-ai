import ContentLoader from 'react-content-loader';
import './styles/Loader.css';

export default function IntentCardSkelton() {
  return (
    <div className="loader-card">
      <ContentLoader
        speed={2}
        width={420}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="8" rx="3" ry="3" width="88" height="10" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="8" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="8" />
        <rect x="0" y="108" rx="3" ry="3" width="178" height="10" />
      </ContentLoader>
    </div>
  );
}
