import type { Action } from '../actions/types';
import {SET_EXERCISES } from '../actions/exercise';

export type State = {
    exercises: string
}

const initialState = {
    exercises: [],
};

export default function (state:State = initialState, action:Action): State {

    if (action.type === SET_EXERCISES) {

        return {
            ...state,
            exercises: action.payload,
        };
    }
    return state;
}

