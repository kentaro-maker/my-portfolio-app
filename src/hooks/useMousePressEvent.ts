import { Handler, KeyFilter } from './useMouse';
import useMousePressDefault from './useMousePress';
import useUpdateEffect from './useUpdateEffect';
import { UseEventTarget } from './useEvent';

const useMousePressEvent = <T extends UseEventTarget>(
  target: T | null,
  key: string,
  mousedown?: Handler | null | undefined,
  mouseup?: Handler | null | undefined,
  useMousePress = useMousePressDefault
) => {
  const pressed = useMousePress(key, target);
  useUpdateEffect(() => {
    if (!pressed && mouseup) {
      mouseup(key);
    } else if (pressed && mousedown) {
      mousedown(key);
    }
  }, [pressed, target]);
};

export default useMousePressEvent;