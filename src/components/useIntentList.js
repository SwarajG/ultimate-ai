import { useEffect, useState } from 'react';
import { fetchIntentData } from '../service';

export default function useIntentList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getIntentData = async () => {
      const response = await fetchIntentData();
      setData(response);
    };
    getIntentData();
  }, []);

  return {
    data,
  };
}
