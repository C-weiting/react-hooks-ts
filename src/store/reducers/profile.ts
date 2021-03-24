import { AnyAction } from "redux";
import { IProfileState } from '@/typings/state';
import LOGIN_TYPES from '@/typings/login-types';

const initState: IProfileState = {
    loginState: LOGIN_TYPES.UNLOGIN,
    user: {},
    error: ''
}


export default function reducer(state: IProfileState = initState, action: AnyAction): IProfileState {
    return state;
}