import { State } from "./types";

const defaultState: State = {
  text: ''
};

export default function rootReducer(state: State = defaultState, action): State {
  switch (action.type) {
    case 'set-text':
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
}
