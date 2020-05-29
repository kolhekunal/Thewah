import React from 'react';
import { StyleSheet, Text, TextInput, View , Image,TouchableOpacity} from "react-native";
import Button from "react-native-button";
import { AppIcon, AppStyles } from "_styles/AppStyles.js";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { WHITE } from '_styles/colors.js';
import { Card } from 'react-native-elements'
import ListItem from '_components/list_item';
const sampleData = [
    {
        "tag":"Search Brands",
        "name": "Deriva Ms (Skin) (15 Gm)",
        "manufacturer": "Glenmark Pharmaceuticals Ltd",
        "size": "15 gm Gel",
        "manufacturer": "Galderma India Pvt Ltd",
    },
    {
        "tag":"Alternate Brands",
        "name": "Junior Lanzol (30Mg)",
        "size": "100 ml Lotion",
        "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    },
    {
      "tag":"Search Brands",
      "name": "Deriva Ms (Skin) (15 Gm)",
      "manufacturer": "Glenmark Pharmaceuticals Ltd",
      "size": "15 gm Gel",
      "manufacturer": "Galderma India Pvt Ltd",
  },
    {
        "name": "D.N.S 0.9G/5G INFUSION",
        "size": "500 ml Infusion",
        "manufacturer": "Baxter India Pvt Ltd",
        "offer":"save 50%"
    },
   
    {
        "name": "ELOCON 0.1% CREAM",
        "size": "5 gm Cream",
        "manufacturer": "Fulford India Ltd",
        "offer":"save 50%"
    },
    {
      "name": "ELOCON 0.1% CREAM",
      "size": "5 gm Cream",
      "manufacturer": "Fulford India Ltd",
      "offer":"save 50%"
  },
  {
    "name": "D.N.S 0.9G/5G INFUSION",
    "size": "500 ml Infusion",
    "manufacturer": "Baxter India Pvt Ltd",
    "offer":"save 50%"
},
   
    {
        "name": "ALPHADOL 0.25MCG CAPSULE",
        "size": "10  Capsule",
        "manufacturer": "Panacea Biotec Ltd",
        "offer":"save 30%"
    },
];
class SearchScreen extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchString: "",
    };
    
  }
  componentDidMount() {
  }
  
  goBack = () =>{
    this.props.navigation.navigate('Home')
  }
   
  
  render() {
    let listItems = sampleData.map( (data, index) => {
        const {tag, name, size, manufacturer, offer} = data; // Destructuring
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                <ListItem
                    key={index}
                    tag={tag}
                    name={name}
                    size={size}
                    manufacturer={manufacturer}
                    offer={offer}
                />
            </TouchableOpacity>
            
        );
      });
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: WHITE }}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.row}>
            <View style={styles.flex}>
                <TouchableOpacity onPress={() => this.goBack()}>
                    <Image
                        style={styles.backIcon}
                        resizeMode='cover'
                        source={AppIcon.icons.back}
                    />
                </TouchableOpacity>
            </View>
          <View style={styles.flex}>
            <Image
                style={styles.logoImage}
                resizeMode='contain'
                source={AppIcon.images.logo}
            />
            </View>
            <View style={styles.flex}>
                <Image
                    style={styles.filterIcon}
                    resizeMode='cover'
                    source={AppIcon.icons.filter}
                />
            </View>
          </View>
        </Card>
        <View style={[styles.container, this.props.style]}>
          {listItems}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 3,
    flexDirection: "row",
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  rightTitle: {
    alignSelf: "stretch",
    textAlign: "right",
    marginRight: 20
  },
  flex: {
    flex: 1
  },
  cardContainer: {
    margin: -10,
    backgroundColor: AppStyles.color.white,
    flex: 1,
    justifyContent:'flex-start'
  },
  logoImage:{
    width:'100%',
    height:40,
  },
  backIcon:{
    width:'30%',
    height:30,
    marginLeft:10,
    marginTop:10
  },
  filterIcon:{
    width:'30%',
    height:30,
    alignSelf:'flex-end',
    marginRight: 17,
    marginTop:12
  }
});
export default SearchScreen;