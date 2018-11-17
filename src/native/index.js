import React from 'react';
import { StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import Routes from './routes/index';
import Loading from './components/Loading';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') {
  StatusBar.setHidden(true);
}

const App = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <StyleProvider style={getTheme(theme)}>
        <Router>{Routes}</Router>
      </StyleProvider>
    </PersistGate>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default App;