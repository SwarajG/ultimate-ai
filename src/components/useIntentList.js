import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIntentList } from './slice/dataSlice';
import { fetchIntentData } from '../service';

export default function useIntentList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getIntentData = async () => {
      const response = await fetchIntentData();
      dispatch(setIntentList(response));
    };
    getIntentData();
  }, [dispatch]);
}
