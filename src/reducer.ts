import * as World from './utils/world';

export type Action = {
  type: ActionTypes,
  data?: any,
}

export enum ActionTypes {
  clear,
  randomize,
  step,
  toggleCell,
  toggleStart,
}

export interface State {
  world: World.Type,
  playing: boolean,
}

export const initialState = {
  world: World.create(50),
  playing: false,
}

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.clear:
      return initialState;
    case ActionTypes.randomize:
      return {
        world: World.randomize(state.world),
        playing: false,
      };
    case ActionTypes.step:
      return {
        ...state,
        world: World.step(state.world),
      };
    case ActionTypes.toggleCell:
      return {
        world: World.toggleCell(state.world, action.data),
        playing: false,
      };
    case ActionTypes.toggleStart:
      return {
        ...state,
        playing: !state.playing,
      }
    default:
      return state;
  }
}
