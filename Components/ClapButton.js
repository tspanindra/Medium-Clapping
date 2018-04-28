import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import ClapBubble from './Clapbubble';

export default class ClapButton extends Component{
  constructor() {
    super();
    this.state = {
      count: 0,
      claps : []
    }
  }

  onPress = () => {
    let count = this.state.count;
    let claps = this.state.claps;
    count++;
    claps.push(count)
    this.setState({count});
  }

  renderClaps = () => {
    return this.state.claps.map( countNum =>  <ClapBubble key={countNum} count={countNum}/> );
  }

  render() {
    let clapIcon = this.state.count > 0 ? <Image source={require('../Images/clapped.png')} style= {styles.image} />
    : <Image source={require('../Images/clapping.png')} style= {styles.image} />
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} style={styles.clapButton} onPress={this.onPress}>
          {clapIcon}
        </TouchableOpacity>
        {this.renderClaps()}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  clapButton: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#ecf0f1',
    bottom: 30,
    right: 20,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30
  }
});
