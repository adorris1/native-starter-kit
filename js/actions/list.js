
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const SET_AREA_KEY = 'SET_AREA_KEY';
export const RETRIEVE_AREAS = 'RETRIEVE_AREAS';
export const SET_EXERCISES = 'SET_EXERCISES';
export const SET_EXERCISES_INDEX = 'SET_EXERCISES';

export function setIndex(index:number):Action {
  return {
    type: SET_INDEX,
    payload: index,
  };
}
export function retrieveAreas(areas:string):Action {
    return {
        type: RETRIEVE_AREAS,
        payload: areas,
    };
}

// export function setAreaKey(areaKey:string):Action {
//     return {
//         type: SET_AREA_KEY,
//         payload: areaKey
//     };
// }

export function setExercises(allExercises:string):Action {
    return {
        type: SET_EXERCISES,
        payload: allExercises,
    };
}
export function setExerciseIndex(index:number):Action {
    return {
        type: SET_INDEX,
        payload: index,
    };
}