import React from 'react';
import { StyleSheet,StatusBar, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppIcon, AppStyles } from "_styles/AppStyles.js";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { WHITE } from '_styles/colors.js';
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchString: "",
    };
  }
  componentDidMount() {
   // StatusBar.setHidden(true);
 }
 componentWillUnmount() {
  //  StatusBar.setHidden(false);
}
  onEdit = () => {
    this.props.navigation.navigate('Edit')
  }
  onSearch = () => {
    this.props.navigation.navigate('Search')
  }
  render() {
    return (
      <View  style={{flex:1}}>


        
       
          <TouchableOpacity onPress={() => this.onEdit()}>
            <View style={[{ flexDirection: "row",borderBottomWidth:1,paddingBottom:8,
    borderBottomColor: AppStyles.color.light_grey,
        backgroundColor: AppStyles.color.white,}]}>
              <View style={[styles.flex]}>
                <Text style={[styles.userName, styles.rightTitle]}>Hello Josh!</Text>
              </View>
             
               <Image
            style={styles.edit_icon}
            width={20}
            height={20}
            resizeMode='contain'
            source={AppIcon.icons.edit}
          />
            </View>
          </TouchableOpacity>
      
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            resizeMode='contain'
            source={AppIcon.images.logo}
          />
          <View style={styles.searchContainer}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Search medicine here"
              placeholderTextColor={AppStyles.color._placeholder}
              onChangeText={(searchString) => { this.onSearch() }}
              underlineColorAndroid="transparent"
            />
          </View>

        </View>
        <View style={{
            flex: 1,
        justifyContent: 'flex-end',
          position: 'absolute',
          bottom:30,
          width: '84%',
 marginHorizontal:"8%",
  
          justifyContent: 'center',
          alignItems: 'center',
          alignContent:"center",
          position: 'absolute', //Here is the trick
        
       
        }}>
          <View style={{
            flex: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
            <Text style={styles.icon }>About</Text>
            <Text style={styles.icon}>Contact</Text>
            <Text style={styles.icon}>Privacy</Text>
            <Text style={styles.icon}>Terms</Text>
            <Text style={styles.icon}>Feedback</Text>
          </View>
        </View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    alignItems: 'center',

  },
  userName: {
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.tint,
    fontFamily: AppStyles.fontName.main,
  },
  rightTitle: {
    alignSelf: "stretch",
    textAlign: "right",
    marginRight: 10
  },
  flex: {
    flex: 1
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    fontFamily: AppStyles.fontName.mRegular
  },
  cardContainer: {
    height:60,
    borderBottomWidth:1,
    borderBottomColor: AppStyles.color.light_grey,
        backgroundColor: AppStyles.color.white,
   
  },
  searchContainer: {
  
    width: "90%",
    marginTop: 45,
    backgroundColor: AppStyles.color.light_grey,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.light_grey,
    borderRadius: AppStyles.borderRadius.main,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:50
  },
  searchIcon: {
    paddingLeft: 15,paddingRight:10,
    color: AppStyles.color.tint,
  },
  logoImage: {
    marginTop: 80,
    marginBottom: 10,
    width: '60%',
    height: 115,
  },
  icon: {
    flex:1,
    marginTop: 5,
    textAlign:'center',
    color: AppStyles.color.tint,
    fontSize: 12,
 
  },
  edit_icon: {
    width:30,height:30,
 
    color: AppStyles.color.tint,
    marginRight:13,
    fontSize: 20,

  },
 
});
export default HomeScreen;
