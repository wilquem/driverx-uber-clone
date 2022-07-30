import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from './modules/rootReducer';
import Reactotron from '../config/reactotron';
import rootSaga from './modules/rootSaga';

import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
);

sagaMiddleware.run(rootSaga)

export default store;