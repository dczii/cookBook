import React from 'react';
import { AsyncStorage, View, Text, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import { createAppContainer } from 'react-navigation';
import createSagaMiddleware from 'redux-saga';

import reducers from './src/redux/reducer'
import rootSaga from './src/redux/saga/rootSaga'
import CustomModal from './src/components/CustomModal'
import Loading from './src/components/Loading'

import Drawer from './src/navigator';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: []
}

const persistedRecuder = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedRecuder, applyMiddleware(sagaMiddleware));
const AppContainer = createAppContainer(Drawer);

export default function App(props) {
  console.disableYellowBox = true;

  // var config = {
  //     databaseURL: 'https://cookbook-c4e1c.firebaseio.com/',
  //     projectId: 'cookbook-c4e1c'
  // };
  // firebase.initializeApp(config);

  return (
      <Provider store={store}>
        <Loading />
        <SafeAreaView />
        <AppContainer />
        <CustomModal />
      </Provider>
    );
}

sagaMiddleware.run(rootSaga);