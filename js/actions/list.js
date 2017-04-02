
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const SET_AREA_INDEX = 'SET_AREA_INDEX';
export const SET_EXERCISES = 'SET_EXERCISES';
export const SET_EXERCISE_INDEX = 'SET_EXERCISE_INDEX';
export const SET_EXERCISE_LIST = 'SET_EXERCISE_LIST';
export const SET_PREVIEW_AREA_TEXT = 'SET_PREVIEW_AREA_TEXT';


export function setIndex(index:number):Action {
  return {
    type: SET_INDEX,
    payload: index,
  };
}


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
export function setExerciseIndex(exerciseKey:number):Action {
    return {
        type: SET_EXERCISE_INDEX,
        payload: exerciseKey,
    };
}
export function setExerciseList(selectedExercises:string):Action {
    return {
        type: SET_EXERCISE_LIST,
        payload: selectedExercises,
    };
}
export function setPreviewAreaText(index:number):Action {
    return {
        type: SET_PREVIEW_AREA_TEXT,
        payload: index,
    };
}