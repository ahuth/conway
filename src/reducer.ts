import * as World from './utils/world';

export enum Actions {
  clear,
  randomize,
  step,
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

export default function reducer(state: State, action: Actions) {
  switch (action) {
    case Actions.clear:
      return initialState;
    case Actions.randomize:
      return {
        world: World.randomize(state.world),
        playing: false,
      };
    case Actions.step:
      return {
        ...state,
        world: World.step(state.world),
      };
    case Actions.toggleStart:
      return {
        ...state,
        playing: !state.playing,
      }
    default:
      return state;
  }
}
