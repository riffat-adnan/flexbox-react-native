import * as React from 'react';
import FlexboxShowcase from './snippets/FlexboxShowcase';
import NestedFlexboxLayout from './snippets/NestedFlexboxLayout';
import InstagramHomePage from './snippets/InstagramHomePage';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NestedFlexboxLayout />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
