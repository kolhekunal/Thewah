import React from 'react';
import { StyleSheet,StatusBar, Text, TextInput, View } from "react-native";
import Button from "react-native-button";
import { AppIcon, AppStyles } from "_styles/AppStyles.js";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { WHITE } from '_styles/colors.js';
import { Card } from 'react-native-elements'

class EditProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            fname: "",
            lname: "",
            phone: "",
            email: "",
            city: "",
            state: "",
            location: ""
        };
    }
   
    componentDidMount() {
        StatusBar.setHidden(true);
     }
     componentWillUnmount() {
        StatusBar.setHidden(false);
   }
    onSignOut = () => {
        this.props.navigation.navigate('Auth')
    };


    render() {
        return (
            <KeyboardAwareScrollView style={{ backgroundColor: WHITE }}>
                <Card containerStyle={styles.cardContainer}>
                    <Text style={[styles.userName, styles.centerTitle]}>Demo User</Text>
                    <Text style={[styles.email, styles.centerTitle]}>demo@gmail.com</Text>
                </Card>
                <View style={styles.container}>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.body}
                            placeholder="First Name"
                            onChangeText={text => this.setState({ fname: text })}
                            value={this.state.fname}
                            placeholderTextColor={AppStyles.color.grey}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.body}
                            placeholder="Last Name"
                            onChangeText={text => this.setState({ lname: text })}
                            value={this.state.lname}
                            placeholderTextColor={AppStyles.color.grey}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <Text style={[styles.dob_syle, styles.centerTitle]}>Date of Birth</Text>
                    {/* <Text></Text> */}
                    <View style={styles.row}>
                        <View style={styles.dobContainer}>
                            <TextInput
                                style={styles.body}
                                placeholder="Date"
                                onChangeText={text => this.setState({ date: text })}
                                value={this.state.date}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.dobContainer}>
                            <TextInput
                                style={styles.body}
                                placeholder="Month"
                                onChangeText={text => this.setState({ month: text })}
                                value={this.state.month}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.dobContainer}>
                            <TextInput
                                style={styles.body}
                                placeholder="Year"
                                onChangeText={text => this.setState({ year: text })}
                                value={this.state.year}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.body}
                            placeholder="Location"
                            secureTextEntry={true}
                            onChangeText={text => this.setState({ location: text })}
                            value={this.state.location}
                            placeholderTextColor={AppStyles.color.grey}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.body}
                            placeholder="City"
                            secureTextEntry={true}
                            onChangeText={text => this.setState({ city: text })}
                            value={this.state.city}
                            placeholderTextColor={AppStyles.color.grey}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.body}
                            placeholder="State"
                            secureTextEntry={true}
                            onChangeText={text => this.setState({ state: text })}
                            value={this.state.state}
                            placeholderTextColor={AppStyles.color.grey}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.body}
                            placeholder="Email"
                            onChangeText={text => this.setState({ email: text })}
                            value={this.state.email}
                            placeholderTextColor={AppStyles.color.grey}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.body}
                            placeholder="Mobile Number"
                            onChangeText={text => this.setState({ phone: text })}
                            value={this.state.phone}
                            placeholderTextColor={AppStyles.color.grey}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                   
                    <Button
                        containerStyle={[styles.facebookContainer, { marginTop: 40,marginBottom:40 }]}
                        style={styles.facebookText}
                        onPress={() => this.onSignOut()}
                    >
                        Sign Out
                    </Button>
                   <Text style={{color:AppStyles.color.tint,fontFamily:AppStyles.fontName.mRegular,  fontSize:14}}>App Version 01</Text>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 0.7,
        flexDirection: "row",
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginBottom:40,
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        color: AppStyles.color.tint,
        marginTop: 20,
        marginBottom: 20,
        fontFamily:AppStyles.fontName.main,
    },
    userName: {
        fontSize: AppStyles.fontSize.content,
        color: AppStyles.color.white,
        marginTop: 25,
        fontFamily:AppStyles.fontName.main,
    },
    email: {
        fontSize: AppStyles.fontSize.normal,
        color: AppStyles.color.white,
        marginBottom: 5,
        fontFamily:AppStyles.fontName.regular,
    },
    dob_syle: {
        marginTop: 30,
        fontSize: AppStyles.fontSize.normal,
        color:AppStyles.color.grey,
        
        fontFamily:AppStyles.fontName.regular,
    },
  
    leftTitle: {
        alignSelf: "stretch",
        textAlign: "left",
        marginLeft: 20
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: "center",
        fontSize: AppStyles.fontSize.content,
        color: AppStyles.color.text
    },
    loginContainer: {
        width: AppStyles.loginButtonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    },
    loginText: {
        color: AppStyles.color.white,
        fontFamily:AppStyles.fontName.mRegular
    },
    placeholder: {
        color: "red",
        fontFamily:AppStyles.fontName.mRegular
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        marginTop: 30,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: AppStyles.color.borderColorLight,
        borderRadius: AppStyles.borderRadius.main,
        fontFamily:AppStyles.fontName.regular,

    },
    dobContainer: {
        width: AppStyles.dobInputWidth.main,
        marginTop: 18,
        borderWidth: 1,
        marginEnd: 8,
        borderStyle: "solid",
        borderColor: AppStyles.color.borderColorLight,
        borderRadius: AppStyles.borderRadius.main,
        height: 42,
        fontFamily:AppStyles.fontName.regular,
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 10,
        color: AppStyles.color.text,
        fontFamily:AppStyles.fontName.mRegular
    },
    facebookContainer: {
        width: AppStyles.loginButtonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    },
    facebookText: {
        color: AppStyles.color.white,
        fontFamily:AppStyles.fontName.mRegular,
    },
    centerTitle: {
        textAlignVertical: "center", textAlign: "center"
    },
    cardContainer: {
        margin: -10,
        backgroundColor: AppStyles.color.tint,

    },
    version_text:{
        fontSize:11,
        fontFamily:AppStyles.fontName.mRegular,
        color: AppStyles.color.tint,
        marginTop:50
    }
});
export default EditProfileScreen;
