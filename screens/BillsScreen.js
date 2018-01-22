import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

class AccountsScreen extends React.Component {
    static navigationOptions = {
        title: 'Bills'
    };

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text onPress={this._handlePress}>AccountsScreen!</Text>
            </View>
        )
    }

    _handlePress = () => {
        this.props.navigation.navigate('Accounts');
    }
}

export default StackNavigator({
    Accounts: {
        screen: AccountsScreen,
    },
});