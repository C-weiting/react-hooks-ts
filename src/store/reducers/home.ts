import { AnyAction } from "redux";
import { IHomeState } from '@/typings/state';
import * as actionTypes from '@/store/action-types';

const initState: IHomeState = {
    currentCategory: 'all'
}

export default function reducer(state: IHomeState = initState, action: AnyAction): IHomeState {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CATEGORY:
            return {...state, currentCategory: action.payload}
        default:
            return state;
    }
}