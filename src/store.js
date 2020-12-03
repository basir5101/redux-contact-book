import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ROOT_REDUCER from './reducers'


const store = createStore(ROOT_REDUCER, composeWithDevTools());

export default store;