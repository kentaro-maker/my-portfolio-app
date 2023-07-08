import { useState } from 'react';
import useMouse, { KeyFilter } from './useMouse';
import { UseEventTarget } from './useEvent';

const useMousePress = <T extends UseEventTarget>(keyFilter: KeyFilter, target: T | null) => {
  const [state, set] = useState<boolean>(false);
  useMouse(target, keyFilter, () => set(true), { event: 'mousedown' }, [state, target]);
  useMouse(target, keyFilter, () => set(false), { event: 'mouseup' }, [state, target]);
  return state;
};

export default useMousePress;