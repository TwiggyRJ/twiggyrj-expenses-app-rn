import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import settings from './config/settings';
import configureStore from './config/store';
import { registerScreens } from './config/routes';
const store = configureStore();
registerScreens(store, Provider);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'expensesApp.Login',
		title: 'Login'
	}
});
