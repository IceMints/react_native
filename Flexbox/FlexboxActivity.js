import React, { Component } from 'react';
import { 
  StyleSheet,
    View
} from 'react-native';

import { Bat, Hat, Cat } from './icons'


export default class flexbasics extends Component {
  render() {
    return (
    <View style={styles.container}>
        <View style = {styles.row}>
          <View style={[styles.boxContainer, styles.boxOne]}> <Bat /> </View>
          <View style={[styles.boxContainer, styles.boxTwo]}> <Hat /> </View>
          <View style={[styles.boxContainer, styles.boxThree]}><Cat /></View>
        </View>

       <View style={styles.row}>
        <View style={[styles.boxContainer, styles.boxTwo]}><Hat /></View>
        <View style={[styles.boxContainer, styles.boxThree]}><Cat /></View>
        <View style={[styles.boxContainer]}><Bat /> </View>
        </View>

        <View style={styles.row}>
        <View style={[styles.boxContainer]}><Cat /></View>
        <View style={[styles.boxContainer, styles.boxTwo]}><Bat /></View>
        <View style={[styles.boxContainer, styles.boxOne]}><Hat /></View>
        </View>

        <View style={styles.row}>
        <View style={[styles.boxContainer, styles.boxThree]}><Bat /></View>
       <View style= {[styles.boxContainer]}> <Hat /> </View>
        <View style={[styles.boxContainer, styles.boxTwo]}><Cat /></View>
        </View>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1, // 1:1
    flexDirection : 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  row:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10
  },
 
  boxContainer: {
    flex: 1.5,
     alignItems: 'center',
    justifyContent: 'center'
    

  },
  boxOne: {
    flex: 1,
    backgroundColor: '#FFEEE4',
   
     
  },
  boxTwo: {
    flex: 1,
    backgroundColor: '#F17F42',   
  
  },
  boxThree: {
    flex: 1,
    backgroundColor: '#CE6D39',
    
   
  },
});
