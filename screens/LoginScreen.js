import React, {Component}from "react";
import {View,Alert,StyleSheet,SafeAreaView,TextInput,Text,Platform,TouchableOpacity} from "react-native"

import {RFValue}from "react-native-responsive-fontsize"
export default class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state={
        email:"",
        password:"",
        userSignedIn:false,
      }
    } 
    signIn =async(email,password)=>{
      firebase.auth()
      .signInWithEmailAndPassword(email,password)
       .then(()=>{
         this.props.navigation.replace("MainScreen")
       })
       .catch(error=>{
         Alert.alert(error.message)
       })
    }
    render(){
      const {email,password}=this.state;
      return(
        <View style={styles.container}>
          <SafeAreaView style={
            styles.droidSafeArea
          }/>
          <Text style={styles.titleText}>MyBuddyApp</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text=>this.setState({email:text})}
            placeholder={"EnterEmail"}
            placeholderTextColor={"#FFFFFF"}
            />
          <TextInput
            style={styles.textInput}
            onChangeText={text=>this.setState({password:text})}
            placeholder={"EnterPassword"}
            placeholderTextColor={"#FFFFFF"}
            />
      <TouchableOpacity style={[styles.button,{marginTop:30,}]}
      onPress={()=>this.signIn(email,password)}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("RegisterScreen")}>
      <Text style={styles.buttonText}>Register
      </Text>
      </TouchableOpacity>
      </TouchableOpacity>
         </View>
      )
    }
  }
  

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white"
  },
  buttonText:{
     fontSize:RFValue(20),
     Color:"Black"
  }
});
