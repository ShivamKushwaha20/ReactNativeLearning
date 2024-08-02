import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElivatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>This is ElivatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.cardOne, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardOne, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardOne, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardOne, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardOne, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
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
  cardOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 12,
  },
  cardElevated: {
    backgroundColor: 'pink',
  },
});
