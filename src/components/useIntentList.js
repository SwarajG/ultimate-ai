import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedIntentList, selectAll } from './slice/appSlice';
import { setIntentList, getIntentList } from './slice/dataSlice';
import { fetchIntentData } from '../service';

export default function useIntentList() {
  const dispatch = useDispatch();
  const data = useSelector(getIntentList);
  const selectedIntentList = useSelector(getSelectedIntentList);

  useEffect(() => {
    const getIntentData = async () => {
      console.log('Hey');
      const response = await fetchIntentData();
      dispatch(setIntentList(response));
    };
    getIntentData();
  }, [dispatch]);

  const onSelectAllToggle = (e) => {
    if (e.target.checked) {
      const idList = data.map(({ id }) => id);
      dispatch(selectAll(idList));
    } else {
      dispatch(selectAll([]));
    }
  };
  return {
    data,
    selectedIntentList,
    onSelectAllToggle,
  };
}
