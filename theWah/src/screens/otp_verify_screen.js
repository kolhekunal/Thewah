import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Button from "react-native-button";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { AppIcon,AppStyles } from "_styles/AppStyles.js";

export default class OtpVerifyScreen extends React.Component {
  state = {
    code: ""
  }
  onPress = ()=> {
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
         <Image
            style={styles.logoImage}
            resizeMode='contain'
            source={AppIcon.images.logo}
          />
        <OTPInputView
          style={{width: '80%', height: 100}}
          pinCount={4}
          code={this.state.code}
          onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled = {(code => {
              console.log(`Code is ${code}, you are good to go!`)
          })}
          placeholderCharacter={'0'}
          placeholderTextColor={AppStyles.color._placeholder}
          selectionColor={"#03DAC6"}
        />
        <Text style={styles.label}>Enter 4 digit OTP.</Text>
        <Button
          containerStyle={styles.btnContainer}
          style={styles.btnText}
          onPress={() => this.onPress()}
        >
          Submit
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label:{
    marginTop:35,
    fontFamily: AppStyles.fontName.mRegular,
    color:AppStyles.color.grey,
    fontSize: AppStyles.fontSize.content / 1.1,
  },

  btnContainer: {
    width: AppStyles.loginButtonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    paddingTop: 12,paddingBottom:12,
    marginTop: 35
  },
  btnText: {
    color: AppStyles.color.white,
    fontFamily: AppStyles.fontName.mRegular,
  },
  underlineStyleBase: {
    width: 70,
    height: 70,
    borderWidth: 0,
    borderBottomWidth: 2,
    color:AppStyles.color.grey,
    borderColor: AppStyles.color.borderColor,
    fontSize:45,
    fontFamily: AppStyles.fontName.regular,

  },

  underlineStyleHighLighted: {
    borderColor: AppStyles.color.borderColor,
    color:AppStyles.color.black,
    fontFamily: AppStyles.fontName.regular,
    fontSize:45
  },
  logoImage:{
    marginTop:50,
    marginBottom:110,
    width:'60%',
    height:120,
  }
});