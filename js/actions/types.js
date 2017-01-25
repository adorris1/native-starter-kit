
export type Action =
  { type: 'PUSH_NEW_ROUTE', route: string }
    | { type: 'POP_ROUTE' }
    | { type: 'POP_TO_ROUTE', route: string }
    | { type: 'REPLACE_ROUTE', route: string }
    | { type: 'REPLACE_OR_PUSH_ROUTE', route: string }
    | { type: 'OPEN_DRAWER'}
    | { type: 'CLOSE_DRAWER'}
    | { type: 'SET_USER', name: string}
    | { type: 'SET_LIST', topics: string}
    | { type: 'RETRIEVE_AREAS', bodyAreas: string}
    | { type: 'SET_AREA_INDEX', bodyAreas: string}
    | { type: 'SET_EXERCISES', exercises: string }
    | { type: 'SET_EXERCISE_INDEX', exerciseIndex: number }
    | { type: 'SET_EXERCISE_LIST', exercisesList: string }


export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
