import { AnyAction } from "redux";
import { IMineState } from '@/typings/state';

const initState: IMineState = {

}

export default function reducer(state: IMineState = initState, action: AnyAction): IMineState {
    return state;
}