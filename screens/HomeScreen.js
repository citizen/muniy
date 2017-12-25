import React from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import {
  StackNavigator,
} from 'react-navigation';


export default class HomeScreen extends React.Component {
static navigationOptions = {
    title: 'Muniy',
  };

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.optionsTitleText}>
          Transactions
        </Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressCard}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
            <Entypo name="credit-card" size={25} color="green" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Card
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressMenu}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <FontAwesome name="money" size={25} color="green" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Bills
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePress}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Entypo name="rocket" size={25} color="green" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Invest
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressAccounts}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Entypo name="area-graph" size={25} color="green" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Loans
              </Text>
            </View>
          </View>
        </Touchable>
       
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Entypo name="paper-plane" size={80} color="green" />
            <Text>Transactions</Text>
          </View>
      
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Welcome {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handlePressCard = () => {
    this.props.navigation.navigate('Card');
  };

  _handlePressMenu = () => {
    this.props.navigation.navigate('Menu');
  };

  _handlePress = () => {
    this.props.navigation.navigate('Bills');
  };
  _handlePressAccounts = () => {
    this.props.navigation.navigate('Accounts');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#FFF',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 20,
    marginTop: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
