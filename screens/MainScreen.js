import React, { Component } from "react";
import {
    StyleSheet, 
    Text, 
    View ,
    Button , 
    TouchableOpacity 
    } from "react-native";

import Appheader from '../components/Appheader';

export default class MainScreen extends Component {
render() {
    return (
      <View style={styles.buttonsContainer}>
    <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade1')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade1</Text>
      </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade2')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade2</Text>
      </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade3')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade3</Text>
      </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade4')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade5')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade6')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade7')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade8')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade9')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade10')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade11th Science')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade11th Commerce')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade12th Science')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('Grade12th Commerce')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('JEE')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}>
      onPress={()=> this.props.navigation.navigate('NEET')}>
      <Text style={{ 
         fontSize:20, 
         color:"red"
      }}> Grade4</Text>
      </TouchableOpacity>
    </View>
    );
    }}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }
});

