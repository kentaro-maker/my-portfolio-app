import { DependencyList, useMemo } from 'react';
import useEvent, { UseEventOptions, UseEventTarget } from './useEvent';
import { noop } from '@/misc/util';

export type KeyPredicate = (event: MouseEvent) => boolean;
export type KeyFilter = null | undefined | string | ((event: MouseEvent) => boolean);
export type Handler = (key: string) => void;


export interface UseMouseOptions<T extends UseEventTarget> {
  event?: 'mousedown' | 'mouseup';
  options?: UseEventOptions<T>;
}

// const createKeyPredicate = (keyFilter: KeyFilter): KeyPredicate =>
//   typeof keyFilter === 'function'
//     ? keyFilter
//     : typeof keyFilter === 'string'
//     ? (event: KeyboardEvent) => event.key === keyFilter
//     : keyFilter
//     ? () => true
//     : () => false;

const useMouse = <T extends UseEventTarget>(
  target: T | null,
  key: KeyFilter,
  fn: Handler = noop,
  opts: UseMouseOptions<T> = {},
  deps: DependencyList = [key]
) => {
  const { event = 'mousedown', options } = opts;
  const useMemoHandler = useMemo(() => {
    // const predicate: KeyPredicate = createKeyPredicate(key);
    const handler: Handler = (key) => {
      return fn(key);
      // if (predicate(handlerEvent)) {
      //   return fn(handlerEvent);
      // }
    };
    return handler;
  }, deps);
  useEvent(event, useMemoHandler, target, options);
};

export default useMouse;