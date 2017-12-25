import React, { Component } from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Swiper from '../Swiper';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View          // Container component
} from 'react-native';

export default class Screens extends Component {
  render() {
    return (
      <Swiper>
      {/* First screen */}
      <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
        <Entypo name="credit-card" size={100} color="white" />
        <Text style={styles.header}>Banking</Text>
        <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
      </View>
      {/* Second screen */}
      <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
        <Entypo name="credit-card" size={100} color="white" />
        <Text style={styles.header}>Remittance</Text>
        <Text style={styles.text}>Prayer is one of the most important things a Christian can do</Text>
      </View>
      {/* Third screen */}
      <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
        <Entypo name="credit-card" size={100} color="white" />
        <Text style={styles.header}>Loans</Text>
        <Text style={styles.text}>Where there is love there is life</Text>
      </View>
    </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});