import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';

// Get the window's width
const {width} = Dimensions.get('window');

/**
 * FlexboxShowcase is a component that showcases how to use flexbox layout to
 * create a responsive, multi-column grid of cards.
 *
 * The component consists of a header, a scrollable body, and a footer. The
 * body contains a grid of cards, each of which is a View component styled with
 * flexbox layout. The grid is created using the Array.from() method to generate
 * an array of numbers from 0 to 7, and then using the map() method to create a
 * View component for each number in the array. The View component is then
 * styled with flexbox layout using the styles.gridContainer and styles.card
 * objects.
 *
 * The component is wrapped in a SafeAreaView component to ensure that it is
 * positioned correctly within the screen.
 *
 * @returns {React.ReactElement} A React element representing the FlexboxShowcase
 * component.
 */
const FlexboxShowcase = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Flexbox Layout Showcase</Text>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.body}>
        {/* Grid of Cards */}
        <View style={styles.gridContainer}>
          {[...Array(8).keys()].map((item, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={{uri: `https://picsum.photos/id/${index + 1}/200/300`}}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Card {index + 1}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 - Flexbox Design</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: '#f5f5f5',
    backgroundColor: '#6200ea',
  },
  header: {
    backgroundColor: '#6200ea',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    width: width / 2 - 20, // Make cards take up 50% of the screen width
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  footer: {
    backgroundColor: '#6200ea',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});

export default FlexboxShowcase;
