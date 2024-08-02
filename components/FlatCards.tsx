import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Orange</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 11,
  },
  container: {
    flex: 2,
    padding: 9,
    flexDirection: 'row',
  },
  card: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 101,
    height: 101,
    borderRadius: 5,
    margin: 11,
  },
  cardOne: {
    backgroundColor: 'orange',
  },
  cardTwo: {
    backgroundColor: 'red',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
  cardFour: {
    backgroundColor: 'green',
  },
});
