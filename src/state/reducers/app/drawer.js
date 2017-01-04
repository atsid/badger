import { TOGGLE_DRAWER } from '../../actions/drawer';

export default function reduce(state = { isOpen: false }, action) {
  if (action.type === TOGGLE_DRAWER) {
    return {
      ...state,
      isOpen: !state.isOpen,
    };
  }
  return state;
}
