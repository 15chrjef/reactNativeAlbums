import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbulmList from './src/components/AlbulmList';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />  
        <AlbulmList />  
      </View>
    );
  }
}

AppRegistry.registerComponent('udemy', () => App);
