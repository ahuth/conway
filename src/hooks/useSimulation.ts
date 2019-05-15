import { useCallback, useReducer } from 'react';
import reducer, { Actions, initialState } from '../reducer';
import useInterval from './useInterval';

export default function useSimulation() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const doClear = useCallback(() => dispatch(Actions.clear), []);
  const doRandomize = useCallback(() => dispatch(Actions.randomize), []);
  const doStep = useCallback(() => dispatch(Actions.step), []);
  const doToggleStart = useCallback(() => dispatch(Actions.toggleStart), []);

  useInterval(
    () => dispatch(Actions.step),
    50,
    state.playing,
  );

  return {
    world: state.world,
    playing: state.playing,
    doClear,
    doRandomize,
    doStep,
    doToggleStart,
  };
}
