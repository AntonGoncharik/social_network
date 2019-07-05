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

let reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  sidebarPage: sidebarReduser
});
export let store = createStore(reducers);
