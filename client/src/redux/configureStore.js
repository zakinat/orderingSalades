//importing redux
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
//redusers
import { saladsList } from './saladsList';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            saladsList,
        }),
        compose(applyMiddleware(thunk))
    )

    return store
}