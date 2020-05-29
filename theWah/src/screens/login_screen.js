import React from 'react';
import {StyleSheet,SafeAreaView, View, Text, TextInput,Image} from 'react-native';
import { AppIcon,AppStyles } from "_styles/AppStyles.js";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FONT_BOLD } from '_styles/typography.js';
import { ALERT } from '_styles/colors.js';

class LoginScreen extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      phone_no: "",
      phone_no_error: null
    };
  }

  onPressLogin = () => {
    // const { phone_no } = this.state;
    // if (phone_no.length < 10) {
    //   this.setState(({ phone_no_error: 'Please enter valid phone no.' }))
    //   return;
    // }
    // this.setState(({ phone_no_error: null }));
    // this.props.navigation.navigate('SignUp')
    this.props.navigation.navigate('OtpVerify')
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.centerTitle]}>Log In</Text>
        <Image
            style={styles.loginImage}
            source={AppIcon.images.login}
          />
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            keyboardType={'numeric'}
            placeholder="Enter Phone Number"
            onChangeText={text => this.setState({ phone_no: text })}
            value={this.state.phone_no}
            placeholderTextColor={AppStyles.color._placeholder}
            underlineColorAndroid="transparent"
            onBlur={() => {
             (this.state.phone_no.trim().length != 10) ?
                this.setState(({ phone_no_error: 'Please enter valid phone no.' })) : this.setState(({ phone_no_error: null }))
            }}
          />
        </View>
        {!!this.state.phone_no_error && (<Text style={{ color: ALERT }}>{this.state.phone_no_error}</Text>)}
        <Button
          containerStyle={styles.loginContainer}
          style={styles.loginText}
          onPress={() => this.onPressLogin()}
        >
          Submit
        </Button>
        <Text style={styles.or}>OR</Text>
        <Button
          containerStyle={[styles.facebookContainer]}
          style={styles.facebookText}
          onPress={() => {}}
        >
          <Icon
            name="facebook"
            size={22}
            color="white"
          />
          <View style={styles.separatorLine}></View>
          Log in with Facebook
        </Button>
        <Button
          containerStyle={[styles.googleContainer]}
          style={styles.facebookText}
          onPress={() => {}}
        >
          <Icon
            name="google"
            size={22}
            color="white"
          />
          <View style={styles.separatorLine}></View>
          Sign up with Google
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  or: {
    fontFamily:AppStyles.fontName.main,
    color: "black",
    marginTop: 50,
    marginBottom: 10
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    color: AppStyles.color.tint,
    marginTop: 80,
    marginBottom: 28,
    fontFamily:AppStyles.fontName.main
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "left",
    marginLeft: 20
  },
  centerTitle:{
    textAlignVertical: "center",textAlign: "center"
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.loginButtonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    paddingTop: 12,paddingBottom:12,
    paddingLeft:20,paddingRight:20,
    marginTop: 45,
    fontSize: AppStyles.fontSize.snormal,
  },
  loginText: {

    color: AppStyles.color.white,
    fontFamily:AppStyles.fontName.mRegular
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: "red"
  },
  InputContainer: {
    width: AppStyles.loginInputWidth.main,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.borderColor,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 55,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
    fontFamily:AppStyles.fontName.mRegular,
    fontSize:16
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    alignContent:'center',
    alignSelf: "center",
    justifyContent:"flex-start",
    flexDirection:"row",
   
    paddingLeft:25,
    textAlign: "left",
    marginTop: 30,
  },
  facebookText: {
  
    textAlign: "left",
    color: AppStyles.color.white,
   
    fontFamily:AppStyles.fontName.main,
    fontSize: AppStyles.fontSize.snormal,

  },
  googleContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.google,
    borderRadius: AppStyles.borderRadius.main,
    alignContent:'center',
    alignSelf: "center",
    justifyContent:"flex-start",
    flexDirection:"row",
   
    paddingLeft:25,
    textAlign: "left",
    marginTop: 30,
  },
  googleText: {
    color: AppStyles.color.white,
    paddingRight:10,
    fontFamily:AppStyles.fontName.main,
    fontSize: AppStyles.fontSize.snormal,
  },
  separatorLine :{
    backgroundColor : '#fff',
    width: 1.1,
    height: 32,
    marginVertical:8,
    marginLeft:15,marginRight:20
  },
  loginImage:{
    marginTop: 20,
    marginLeft:100,
    width:'30%',
    height:100,
    margin:-26,
    alignSelf:'flex-start'
  }
});

export default LoginScreen;
