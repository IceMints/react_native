import React, {Component} from 'react';
import{View,
Image,
Button,
StyleSheet,
ScrollView} from 'react-native';
import {ImagePicker} from 'expo';


export default class PickImage extends Component{
  
//image array
  state = {
    image: [],
  }

//picks an image from ImagePicker
pickImage = async() => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4,3],
  });

  console.log(result);

  if (!result.cancelled){
    this.setState({
      image: this.state.image.concat([result.uri]),
    });
  }
};

//renders the image and assigns array key
_renderImages(){
  let images = [];
  this.state.image.map((item, index) => {
    images.push(
      <Image
        key = {index}
        source = {{uri:item}}
        style = {{width: 200, height: 150, marginBottom:5}}
       />
    );
  });

  return images;
}


  
  render() {
    return(
      <ScrollView>
      <View style = {styles.container}> 
      <View style = {styles.placeholder}>
       {this._renderImages()}
      <Image source = {this.state.pickedImaged} style = {styles.previewImage}/>
     
      </View>
      <View style = {styles.button}>
      <Button title="Pick Image" onPress={this.pickImage}/>
     
      </View>
      </View>
      </ScrollView>

    );
  }
}
//styles
const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
   placeholder: {
     paddingTop: 30, 
     flexDirection: 'column',
     
      
    },
    button: {
      position: 'relative',
      alignSelf: 'center',
      bottom: 0,
      left: 0,
      right: 0,
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
  });