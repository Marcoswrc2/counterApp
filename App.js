import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import AppContextProvider from './src/providers';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import theme from './src/styles/theme';

import AppRouter from './src/router';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppContextProvider>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor={theme.colors.primary}
          />
          <AppRouter />
        </AppContextProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
