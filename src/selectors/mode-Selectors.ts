import { State } from "../Store";

export function happyMomentsSelector(state: State) {
  return state.happy.happyMoments;
}
export function sadMomentsSelector(state: State) {
  return state.sad.sadMoments;
}
