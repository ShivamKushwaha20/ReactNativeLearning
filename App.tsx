import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCards';
import ElivatedCard from './components/ElivatedCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElivatedCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
