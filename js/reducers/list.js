
import type { Action } from '../actions/types';
import {
    SET_INDEX,
    RETRIEVE_AREAS,
    SET_EXERCISES,
    SET_EXERCISE_INDEX,
    SET_EXERCISE_LIST,

} from '../actions/list';

export type State = {
    bodyAreas: string,
    exercises: string
}

const initialState = {
  bodyAreas: [],
  exercises: [],
  selectedIndex: undefined,
};

export default function (state:State = initialState, action:Action): State {
    if (action.type === SET_INDEX) {
        return {
          ...state,
          selectedIndex: action.payload,
        };
    }
    if (action.type === RETRIEVE_AREAS) {
      return {
          ...state,
          bodyAreas: action.payload,
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
            selectedExerciseIndex: action.payload,
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

