import { renderHook, act } from '@testing-library/react-hooks';
import { fetchIntentData } from '../../service';
import useIntentList from '../useIntentList';

jest.mock('../../service');

describe('useIntentList', () => {
  it('should handle effect hook', async () => {
    const data = [{ id: '1' }];
    fetchIntentData.mockResolvedValue({ data });
    const { result, waitForNextUpdate } = renderHook(useIntentList);
    await act(() => waitForNextUpdate());
    expect(result.current.data).toEqual({ data });
  });
});
