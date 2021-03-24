import { connectRouter } from 'connected-react-router';
import { AnyAction, combineReducers, ReducersMapObject, Reducer } from 'redux';
import history from '@/history';
import home from './home';
import profile from './profile';
import mine from './mine';
import { IRootState } from '@/typings/state';

const reducers: ReducersMapObject<IRootState, AnyAction> = {
    home,
    profile,
    mine,
    router: connectRouter(history)
}

const rootReducer: Reducer<IRootState, AnyAction> = combineReducers<IRootState>(reducers);

export default rootReducer;