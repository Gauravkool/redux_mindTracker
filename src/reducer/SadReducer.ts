import { AnyAction } from "redux";
import { Moment } from "../Store";
import { produce } from "immer";
import { SAD_BUTTON_CLICKED } from "../actions/mood-actions";

export type SadState = {
  sadMoments: Moment[];
};
export const initialSadState: SadState = {
  sadMoments: [],
};

function SadnessReducer(currentSadState = initialSadState, action: AnyAction) {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      return produce(currentSadState, (draft) => {
        draft.sadMoments.push(action.payload);
      });
    default:
      return currentSadState;
  }
}
export default SadnessReducer;
