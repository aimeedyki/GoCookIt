import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FeedCard = ({
  category,
  image,
  title
}) => (
  <View style={styles.card}>
    <Image
      source={{ uri: image }}
      style={{ width: '30%', height: 120, marginRight: 20 }}
    />
    <View style={styles.details}>
      <Text numberOfLines={1} style={styles.meal}>{title}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <TouchableOpacity
        onPress={() => { Alert.alert('You tapped the button!'); }}
        style={styles.view}
      >
        <Text style={styles.viewText}>View Recipe</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#BF3F3C',
    marginBottom: 5
  },
  details: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 0,
    flexGrow: 1,
  },
  meal: {
    color: '#Eee6d7',
    fontSize: 25,
    fontWeight: 'bold',
    width: '100%',
  },
  category: {
    color: '#3F1A18',
    fontSize: 15,
  },
  view: {
    backgroundColor: '#9C201D',
    marginTop: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20
  },
  viewText: {
    color: '#Eee6d7',
    fontWeight: 'bold'
  }
});

export default FeedCard;
