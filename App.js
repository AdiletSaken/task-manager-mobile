import React from 'react';
import { StyleSheet, View } from 'react-native';
import Manager from './components/Manager';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Manager></Manager>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 44
  }
});

export default App;
