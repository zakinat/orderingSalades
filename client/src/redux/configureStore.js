//importing redux
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
//redusers
import { saladsList } from './saladsList';
import { MoleculesList } from './molecules';
import {carteList} from './carte'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            saladsList,
            carteList,
            MoleculesList,
        }),
        compose(applyMiddleware(thunk))
    )

    return store
}