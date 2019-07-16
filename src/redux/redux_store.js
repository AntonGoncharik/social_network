import {
    createStore,
    combineReducers
} from 'redux';
import {
    profileReduser
} from './profile_reducer';
import {
    dialogsReduser
} from './dialogs_reducer';
import {
    sidebarReduser
} from './sidebar_reducer';
import {
    usersReducer
} from './users_reducer';
import {
    authReducer
} from './auth_reducer';

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebarPage: sidebarReduser,
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(reducers);
