import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';

import PlacesNavigator from './routes/PlacesNavigator';
import placesReducer from './store/reducers/places';

export default function App() {
  const rootReducer = combineReducers({
    places: placesReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlacesNavigator />
      </NavigationContainer>
    </Provider>
  );
}
