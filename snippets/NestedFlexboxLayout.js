import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

/**
 * A showcase component for React Native's flexbox layout.
 *
 * This component showcases a nested flexbox layout with a profile card,
 * horizontal interests section, and a grid of latest posts.
 *
 * The profile card has a sidebar with a profile image and a follow button,
 * and a main section with the user's name, bio, and stats.
 *
 * The horizontal interests section displays a scrollable list of interest
 * tags.
 *
 * The latest posts section displays a grid of post cards with images and
 * titles.
 *
 * This component is meant to be a starting point for your own React Native
 * projects, and can be customized to fit your needs.
 */
const NestedFlexboxShowcase = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.container}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          {/* Sidebar with Profile Image */}
          <View style={styles.profileSidebar}>
            <Image
              source={{uri: 'https://picsum.photos/id/3/200/300'}}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </View>

          {/* Profile Details */}
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Riffat Adnan</Text>
            <Text style={styles.profileBio}>
              Software Engineer | React Native Enthusiast | Open Source
              Contributor
            </Text>

            {/* Stats Section */}
            <View style={styles.statsContainer}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>120</Text>
                <Text style={styles.statLabel}>Posts</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>450</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>280</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Horizontal Interests Section */}
        <View style={styles.interestsSection}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.interestsContainer}>
            {[
              'React Native',
              'JavaScript',
              'Fitness',
              'Tech',
              'AI',
              'Design',
            ].map((interest, index) => (
              <View key={index} style={styles.interestTag}>
                <Text style={styles.interestText}>{interest}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Latest Posts Section */}
        <View style={styles.postsSection}>
          <Text style={styles.sectionTitle}>Latest Posts</Text>
          <View style={styles.postsGrid}>
            {[...Array(6)].map((_, index) => (
              <View key={index} style={styles.postCard}>
                <Image
                  source={{
                    uri: `https://picsum.photos/id/${index + 1}/200/300`,
                  }}
                  style={styles.postImage}
                />
                <Text style={styles.postTitle}>Post Title {index + 1}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
    marginBottom: 20,
  },
  profileSidebar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  followButton: {
    marginTop: 10,
    backgroundColor: '#6200ea',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  profileDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  profileBio: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ea',
  },
  statLabel: {
    fontSize: 14,
    color: '#333',
  },

  /* Interests Section */
  interestsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  interestsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interestTag: {
    backgroundColor: '#6200ea',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginRight: 10,
  },
  interestText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

  /* Latest Posts Section */
  postsSection: {
    marginBottom: 20,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '48%', // Make two columns
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default NestedFlexboxShowcase;
