import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
// import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/utils/constants';
// import { fontAssets } from './src/utils/fontAssets';
// import { LoadingScreen } from './src/commons/LoadingScreen'
import Navigator from './src/navigator'

export default class App extends React.Component {
  render() {
    return (
      <ActionSheetProvider>        
        <ThemeProvider theme={ colors }>
          <Navigator />
        </ThemeProvider>
    </ActionSheetProvider>
    );
  }
}
