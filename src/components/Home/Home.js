import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';

export default class Home extends React.Component {
  state = {
    ready: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Apple': require('../../../assets/fonts/Apple-Butter.ttf')
    })
    this.setState(() => ({ ready: true }));
  }
  render() {
    const { navigate } = this.props.navigation;
    if (!this.state.ready) return <Text>Loading...</Text>
    return (
      <View style={styles.container}>
        <Image
          style={{ marginRight: 25, marginBottom: 50 }}
          source={require('../../../assets/images/logo3.png')}
        />
        <Text style={styles.welcome}>Welcome!</Text>
        <View >
          <TouchableOpacity 
          style={styles.button} 
          onPress={() => { navigate('Feed') }}
          >
            <Text style={styles.go}>GoCookIt</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BF3F3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    marginBottom: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#Eee6d7'
  },
  button: {
    backgroundColor: '#3F1A18',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  go: {
    color: '#Eee6d7',
    fontFamily: 'Apple',
    fontSize: 45,
    fontWeight: 'bold',
  }
});
