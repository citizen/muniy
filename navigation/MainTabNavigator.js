import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import AccountsScreen from '../screens/AccountsScreen';
import AboutAccounts from '../screens/AboutAccounts';
import MenuScreen from '../screens/MenuScreen';
import BillsScreen from '../screens/BillsScreen';
import LoansScreen from '../screens/LoansScreen';
import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CardScreen from '../screens/CardScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Bills: {
      screen: BillsScreen,
    },
    Accounts: {
      screen: AccountsScreen,
    },
    Card: {
      screen: CardScreen,
    },
    Menu: {
      screen: MenuScreen,
    },
    Loans: {
      screen: LoansScreen,
    },
    Help: {
      screen: HelpScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'home';
            break;
          case 'Help':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Bills':
            iconName = Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'ios-person';
            break;
          case 'Accounts':
            iconName = Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'ios-person';
            break;
          case 'Menu':
            iconName = Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'ios-person';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'ios-person';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
