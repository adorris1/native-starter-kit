
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const SET_AREA_INDEX = 'SET_AREA_INDEX';
export const RETRIEVE_AREAS = 'RETRIEVE_AREAS';
export const SET_EXERCISES = 'SET_EXERCISES';
export const SET_EXERCISE_INDEX = 'SET_EXERCISES';
export const SET_EXERCISE_LIST = 'SET_EXERCISE_LIST';

export function setIndex(index:number):Action {
  return {
    type: SET_INDEX,
    payload: index,
  };
}
// export function retrieveAreas(areas:string):Action {
//     return {
//         type: RETRIEVE_AREAS,
//         payload: areas,
//     };
// }

export function setAreaIndex(areaKey:string):Action {
    return {
        type: SET_AREA_INDEX,
        payload: areaKey
    };
}

export function setExercises(allExercises:string):Action {
    return {
        type: SET_EXERCISES,
        payload: allExercises,
    };
}
export function setExerciseIndex(index:number):Action {
    return {
        type: SET_EXERCISE_INDEX,
        payload: index,
    };
}
export function setExerciseList(selectedExercises:string):Action {
    return {
        type: SET_EXERCISE_LIST,
        payload: selectedExercises,
    };
}