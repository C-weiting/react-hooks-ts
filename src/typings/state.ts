import { RouterState } from 'connected-react-router';
import LOGIN_TYPES from './login-types';

export interface IHomeState {
    currentCategory: string
}

export interface IMineState {

}

export interface IProfileState {
    loginState: LOGIN_TYPES;
    user: any;
    error: string | null;
}

export interface IRootState {
    home: IHomeState,
    profile: IProfileState,
    mine: IMineState,
    router: RouterState
}