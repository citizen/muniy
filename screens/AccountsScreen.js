import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Accounts'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Accounts</Text>
        <Text onPress={this._handlePress}>Bills</Text>
        <Text onPress={this._handlePress}>Invest</Text>
        <Text onPress={this._handlePress}>Loan</Text>
      </View>

    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Loans');
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});