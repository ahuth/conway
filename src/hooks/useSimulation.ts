import { useCallback, useReducer } from 'react';
import reducer, { ActionTypes, initialState } from '../reducer';
import useInterval from './useInterval';

export default function useSimulation() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const doClear = useCallback(() => dispatch({ type: ActionTypes.clear }), []);
  const doRandomize = useCallback(() => dispatch({ type: ActionTypes.randomize }), []);
  const doStep = useCallback(() => dispatch({ type: ActionTypes.step }), []);
  const doToggleCell = useCallback((index) => dispatch({ type: ActionTypes.toggleCell, data: index }), []);
  const doToggleStart = useCallback(() => dispatch({ type: ActionTypes.toggleStart }), []);

  useInterval(doStep, 50, state.playing);

  return {
    world: state.world,
    playing: state.playing,
    doClear,
    doRandomize,
    doStep,
    doToggleCell,
    doToggleStart,
  };
}
