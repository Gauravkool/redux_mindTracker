import { AnyAction } from "redux";
import { Moment } from "../Store";

import { produce } from "immer";
import { HAPPY_BUTTON_CLICKED } from "../actions/mood-actions";

export type HappyState = {
  happyMoments: Moment[];
};
export const initialHappyState: HappyState = {
  happyMoments: [],
};

function HappinessReducer(
  currentHappyState = initialHappyState,
  action: AnyAction
) {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return produce(currentHappyState, (draft) => {
        draft.happyMoments.push(action.payload);
      });

    default:
      return currentHappyState;
  }
}
export default HappinessReducer;
