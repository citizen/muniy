import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import ui16px3_funnel40 from './../assets/mainmenu_images/ui16px3_funnel40.png'
import arrows24pxoutline4_contrast from './../assets/mainmenu_images/arrows24pxoutline4_contrast.png'
import g3398 from './../assets/mainmenu_images/g3398.png'
import g3040 from './../assets/mainmenu_images/g3040.png'
import layer1_54 from './../assets/mainmenu_images/layer1_54.png'
import layer1_50 from './../assets/mainmenu_images/layer1_50.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.ResetAllMENUS}>
          <View style={styles.Header}>
            <View style={styles.gradient}>
              <View style={styles.gradientcopy}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.Title}>Discover</Text>
                  <Image source={ui16px3_funnel40} style={styles.ui16px3_funnel40} />
                  <View style={styles.Group4}>
                    <Image source={arrows24pxoutline4_contrast} style={styles.arrows24pxoutline4_contrast} />
                  </View>
                </View>
              </View>
            </View>
          </View>
       
          <View style={{flexDirection: 'row'}}>
            <View style={styles.Finance_27}>
              <View style={styles.Layer_1}>
                <Image source={g3040} style={styles.g3040} />
              </View>
            </View>
            <View style={styles.Group5_16}>
              <Text style={styles.Bills}>Bills</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.Finance_52}>
              <View style={styles.svg6485}>
                <Image source={layer1_54} style={styles.layer1_54} />
              </View>
            </View>
            <View style={styles.Group5_18}>
              <Text style={styles.Invest}>Invest</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.Finance_48}>
              <View style={styles.svg2_49}>
                <Image source={layer1_50} style={styles.layer1_50} />
              </View>
            </View>
            <View style={styles.Group5_20}>
              <Text style={styles.Loan}>Loan</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  ResetAllMENUS: {

  },
  Header: {
    alignSelf: 'center',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradientcopy: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Title: {
    backgroundColor: 'transparent',
    fontSize: 16,
    fontWeight: '400',
    color: '#35343D',
    textAlign: 'center'
  },
  ui16px3_funnel40: {

  },
  Group4: {
    width: 15,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrows24pxoutline4_contrast: {

  },
  Finance: {
    width: 130,
    height: 89,
    alignItems: 'center',
    justifyContent: 'center'
  },
  svg2: {
    width: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  layer1: {
    width: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  g3398: {

  },
  Group5: {
    width: 129,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Accounts: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5F5D70'
  },
  Finance_27: {
    width: 73,
    height: 81,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Layer_1: {
    width: 73,
    alignItems: 'center',
    justifyContent: 'center'
  },
  g3040: {

  },
  Group5_16: {
    width: 58,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Bills: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5F5D70'
  },
  Finance_52: {
    width: 91,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  svg6485: {
    width: 91,
    alignItems: 'center',
    justifyContent: 'center'
  },
  layer1_54: {

  },
  Group5_18: {
    width: 85,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Invest: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5F5D70'
  },
  Finance_48: {
    width: 71,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center'
  },
  svg2_49: {
    width: 71,
    alignItems: 'center',
    justifyContent: 'center'
  },
  layer1_50: {

  },
  Group5_20: {
    width: 66,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Loan: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5F5D70'
  }
})
