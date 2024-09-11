import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

/**
 * A React component to render an Instagram-like home page.
 *
 * The component renders a header with a title, a story section with a horizontal
 * scroll view of profile images, and a feed section with a vertical scroll view of
 * posts. Each post contains a header with a profile image and username, an image,
 * an interaction section with three icons, and a caption section with a username
 * and caption text.
 *
 * The component uses the `SafeAreaView` component to ensure that the content is
 * visible on all devices, and the `ScrollView` component to enable scrolling.
 *
 * The component also uses the `Image` component to render images, and the
 * `TouchableOpacity` component to enable touch interactions.
 */
const InstagramHomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Instagram Header */}
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
      </View> */}

      <ScrollView contentContainerStyle={{paddingHorizontal: 10}}>
        {/* Story Section */}
        <View style={styles.storySection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.storyContainer}>
            {[
              'https://picsum.photos/id/5/200/300',
              'https://picsum.photos/id/30/200/300',
              'https://picsum.photos/id/50/200/300',
            ].map((image, index) => (
              <View key={index} style={styles.story}>
                <Image source={{uri: image}} style={styles.storyImage} />
                <Text style={styles.storyUsername}>User {index + 1}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Feed Section */}
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.postContainer}>
            {/* Post Header */}
            <View style={styles.postHeader}>
              <View style={styles.postHeaderLeft}>
                <Image
                  source={{uri: 'https://picsum.photos/id/56/200/300'}}
                  style={styles.profilePic}
                />
                <Text style={styles.username}>Username {index + 1}</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.optionsIcon}>•••</Text>
              </TouchableOpacity>
            </View>

            {/* Post Image */}
            <Image
              source={{uri: 'https://picsum.photos/id/33/200/300'}}
              style={styles.postImage}
            />

            {/* Interaction Section */}
            <View style={styles.interactionSection}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://picsum.photos/id/1/200/300',
                  }}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://picsum.photos/id/99/200/300',
                  }}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://picsum.photos/id/88/200/300',
                  }}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>

            {/* Post Caption */}
            <View style={styles.captionSection}>
              <Text style={styles.username}>Username {index + 1}</Text>
              <Text style={styles.caption}>
                This is a sample post caption for post {index + 1}.
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  /* Header Section */
  header: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Arial',
  },

  /* Story Section */
  storySection: {
    marginBottom: 20,
  },
  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  story: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: '#ff8501',
    borderWidth: 3,
    marginBottom: 5,
  },
  storyUsername: {
    fontSize: 12,
    color: '#333',
  },

  /* Post Section */
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  postHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  optionsIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },

  /* Interaction Section */
  interactionSection: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },

  /* Caption Section */
  captionSection: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  caption: {
    color: '#333',
    fontSize: 14,
  },
});

export default InstagramHomePage;
