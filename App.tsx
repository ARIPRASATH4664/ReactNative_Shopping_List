/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  LogBox,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { TabRoute } from './navigation/tabRoute';
import { Provider, useDispatch } from "react-redux";

import {store} from "./store";
import { StackRoute } from './navigation/stackRoute';
import { getStorage, getStorageInstance } from './hepler/mmkv';
import { MMKV } from 'react-native-mmkv';
import { updateList } from './store/action';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

LogBox.ignoreAllLogs();

export default App;
