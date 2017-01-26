
import type { Action } from '../actions/types';
import {
    SET_INDEX,
    SET_AREA_INDEX,
    RETRIEVE_AREAS,
    SET_EXERCISES,
    SET_EXERCISE_INDEX,
    SET_EXERCISE_LIST,

} from '../actions/list';

export type State = {
    bodyAreas: string,
    exercises: string,
    topics: string,
}

const initialState = {
  bodyAreas: ["Head/Neck", "Shoulders/Chest", "Arms", "Back", "Core", "Hips", "Quadriceps", "Hamstrings", "Adductors", "Calf/Achilles",
  "Foot/Lower Leg", "Balance"],
  exercises: [],
  selectedIndex: undefined,
  topics: ["FAQ's", "Symptom Identifier","Injury Summaries","Exercises & Stretches"]
};

export default function (state:State = initialState, action:Action): State {
    if (action.type === SET_INDEX) {
        return {
          ...state,
          selectedIndex: action.payload,
        };
    }
    // if (action.type === RETRIEVE_AREAS) {
    //   return {
    //       ...state,
    //       bodyAreas: action.payload,
    //   };
    // }
    if (action.type === SET_AREA_INDEX) {
        return {
            ...state,
            areaIndex: action.payload,
        };
    }
    if (action.type === SET_EXERCISES) {
        return {
            ...state,
            exercises: action.payload,
        };
    }
    if (action.type === SET_EXERCISE_INDEX) {
        return {
            ...state,
            exerciseIndex: action.payload,
        };
    }
    if (action.type === SET_EXERCISE_LIST) {
        return {
            ...state,
            exerciseList: action.payload,
        };
    }
  return state;
}

