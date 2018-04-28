import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';

export default class ClabBubble extends Component{
  constructor() {
    super();
    this.state = {
      yPosition: new Animated.Value(0),
      opacity: new Animated.Value(0)
    }
  }
  
  componentDidMount(){
    Animated.parallel([
      Animated.timing(
        this.state.yPosition,
        {
          toValue: -120,
          duration: 500
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500
        })
    ]).start(() => {
        setTimeout( () =>  {
          this.props.animationComplete(this.props.count)
        },400);
    });
  }
  
  render() {
    let animationStyle = {
      transform: [{ translateY: this.state.yPosition}],
      opacity: this.state.opacity
    }
    return (
      <Animated.View style = {[styles.clapBubble, animationStyle]}>
        <Text style={styles.clapText}> +{this.props.count} </Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  clapBubble: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#15a872',
    bottom: 30,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  clapText: {
    color: 'white',
    fontSize: 14
  }
});