import React from 'react';
import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import { AppIcon, AppStyles } from "_styles/AppStyles.js";
import { FONT_BOLD } from '_styles/typography.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListItem extends React.Component {
    render() {
        let date = new Date();
        let now = date.toLocaleString();

        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
             
                    <View>
                        {this.props.tag &&<Text style={styles.tagText}>{this.props.tag}</Text>}
                        <Text style={styles.nameText}>{this.props.name}</Text>
                        <Text style={styles.grayText}>{this.props.manufacturer}</Text>
                        <Text style={styles.smallText}>{(this.props.size)}</Text>
                        <Text style={styles.highlight}>{(this.props.offer)}</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'center',alignContent:'center',alignItems:"center"}}>
                    <Text style={styles.view_more_grayText}>{"View More"}</Text>
                        <Image
            style={styles.edit_icon}
            width={70}
            height={70}
            resizeMode='contain'
            source={AppIcon.icons.back_arrow_red}
          />
           </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row', // row
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingLeft:10
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    text: {
        color: 'black',
    },
    tagText:{
        fontSize:19,
        color:AppStyles.color.tint,
        fontFamily: AppStyles.fontName.main,
        marginBottom:8
    },
    nameText:{
        fontSize:16,
        color:AppStyles.color.dark_grey,
        marginTop:10,
        fontFamily: AppStyles.fontName.bold,
    },
    grayText:{
        fontSize:12,
        marginTop:2,
        color:AppStyles.color.dark_grey,
        fontFamily: AppStyles.fontName.mRegular,
    },
    view_more_grayText:{
        fontSize:9,
     
        color:AppStyles.color.dark_grey,
        fontFamily: AppStyles.fontName.mRegular,
    },
    smallText:{
        fontSize:14,
        color:AppStyles.color.dark_grey,
        fontFamily: AppStyles.fontName.regular,
    },
    highlight:{
        color:AppStyles.color.green,
        fontSize:12,
        marginTop:5,
        fontFamily: AppStyles.fontName.main,
    },
    moreIcon:{
        marginRight:10,
        color:AppStyles.color.tint,
    },
    edit_icon: {
        width:40,height:40,
        transform: [{ rotate: '180deg'}],
        color: AppStyles.color.tint,
        marginRight:10,
        marginTop:2
      
    
      },
});

  
export default ListItem;