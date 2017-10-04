/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import Login from '../routes/login/index'
import Register from '../routes/register/index'
import Welcome from '../routes/welcome/index'
import AllExpenses from '../routes/expenses/all/index'
import Drawer from '../routes/drawer'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('expensesApp.Login', () => Login, store, Provider);
  Navigation.registerComponent('expensesApp.Register', () => Register, store, Provider);
  Navigation.registerComponent('expensesApp.Welcome', () => Welcome, store, Provider);
  Navigation.registerComponent('expensesApp.AllExpenses', () => AllExpenses, store, Provider);
  Navigation.registerComponent('expensesApp.Drawer', () => Drawer, store, Provider);
}
