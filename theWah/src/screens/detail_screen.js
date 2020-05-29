import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppIcon, AppStyles } from "_styles/AppStyles.js";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { WHITE } from '_styles/colors.js';
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FONT_BOLD } from '_styles/typography.js';
import { SliderBox } from "react-native-image-slider-box";

const sampleData = {
    name: "Asthalin 100 mcg inhaler",
    manufacturer: "Cipla Ltd",
    composition: "Composition for Asthalin 100 mcg inhaler",
    salt: "Salt Composition Salbutamol/Albuterol (100mcg)",
    image: "https://www.arrowmeds.com/wp-content/uploads/2019/02/Asthalin-Inhaler-100mcg.jpg",
    price: "₹120.49",
    uses_heading: "Uses of Asthalin Inhaler",//Uses of Asthalin Inhaler
    uses: [
        "Asthma", "Chronic obstructive pulmonary disease (COPD)"
    ],
    side_effect_heading: "Side Effects of Asthalin Inhaler",
    side_effect: ["Most side effects do not require any medical attention and disappear as your body adjusts to the medicine",
        "Consult your doctor if they persist or if you're worried about them"],
    common_effect_heading: "Common side effects of Asthalin",
    common_effect: ["Headache", "Tremor", "Muscle cramps"],
    works_heading: "How Asthalin Inhaler works?",
    works: "Asthalin 100mcg inhaler is a bronchodilator It works by relaxing the muscles in the airways and widens airways. This makes breathing easier",
    advice: ["Asthalin 100 mcg inhaler is used to relieve symptoms of asthma and chronic obstructive pulmonary disease (COPD) such as coughing wheezing and breathlessness.",
        "Asthalin 100 mcg inhaler is used to relieve symptoms of asthma and chronic obstructive pulmonary disease (COPD) such as coughing wheezing and breathlessness.",
        "The inhalers are called 'reliever inhalers as they give you quick relief from breathing problems.",
        "Always keep the inhaler upright during loading of the dose and administration steps",
        "If you feel a slightly sweet tasting powder in your mouth after inhaling you have received the dose and the active substance has reached your lungs.",
        "Always replace the inhaler cap after you have used the inhaler. Gargle with warm water after each inhalation to avoid any fungal infections in your mouth and throat.",
        "Dry mouth may occur as a side effect Frequency mouthrinse good oral hygiene, increased water intake and sugarless candy may help",
    ],
    safety_advice: [
        {
            heading: "CONSULT YOUR DOCTOR",
            image: AppIcon.icons.alcohol,
            condition: "Alcohol",
            text: "It is not known whether it is safe to consume alcohol with Asthalin 100mcg inhaler. Please consult your doctor"
        },
        {
            heading: "CONSULT YOUR DOCTOR",
            image:  AppIcon.icons.pregrancy,
            condition: "Pregnancy",
            text: "Asthalin 100mcg Inhaler may be unsafe to use during pregnancy. Although there are limited studies in humans animal studies have shown harmful effects on the developing baby. Your doctor will weigh the benefits and any potential risks before prescribing it to you. Please consult your doctor."
        },
        {
            heading: "SAFE IF PRESCRIBED",
            image:  AppIcon.icons.breast_feeding,
            condition: "Breastfeeding",
            text: "Asthalin 100 mcg inhaler is safe to use during breastfeeding"
        },
        {
            heading: "",
            image: AppIcon.icons.driving,
            condition: "Driving",
            text: "No interaction found established"
        },
        {
            heading: "",
            image: AppIcon.icons.kidney,
            condition: "Kidney",
            text: "No interaction found established"
        },
        {
            heading: "",
            image: AppIcon.icons.liver,
            condition: "Liver",
            text: "No interaction found established"
        }
    ],
    manufacturer_address: "Cipla House, Peninsula Business Park, Ganpatrao Kadam Marg, Lower Parel, Mumbai-400013",
    images: [
            AppIcon.detail.img_1,
            AppIcon.detail.img_2
    ]
}
class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchString: "",
        };

    }
    componentDidMount() {
    }

    goBack = () => {
        this.props.navigation.navigate('Home')
    }


    render() {
        let uses = sampleData.uses.map( (data,index) => {
            return (
            <Text key={index} style={styles.grayText}>{data}</Text>
            );
          });
          let side_effects = sampleData.side_effect.map( (data,index) => {
            return (
            <Text key={index} style={styles.grayText}>{data}</Text>
            );
          });
          let common_effects = sampleData.common_effect.map( (data,index) => {
            return (
            <Text key={index} style={styles.grayText}>{data}</Text>
            );
          });
          let advices = sampleData.advice.map( (data,index) => {
            return (
            <View style={[styles.row,styles.justify_flex_start]}>
                <Icon
                    style={[styles._color, styles.p_5]}
                    name="circle"
                    size={5}
                    solid
                ></Icon>
                <Text key={index} style={[styles.grayText, styles.p_5]}>{data}</Text>
            </View>
            );
          });
          let safety_advices = sampleData.safety_advice.map( (data,index) => {
            const { heading, image, condition,text } = data
            return (
                <View style={styles.container}>
                <View style={styles.container_left}>
                    <Image source={image} style={styles.photo} />
                    <Text style={styles.description}>
                        {condition}
                    </Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={[styles.title, styles.m_b10]}>
                        {heading}
                    </Text>
                    <Text style={styles.description}>
                        {text}
                    </Text>
                </View>
            </View>
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
                            <Icon style={[styles.searchIcon, styles.rightIcon]} name="search" size={20} color="#000" />
                        </View>
                    </View>
                </Card>
                <View style={styles.mainContainer}>
                    <Text style={styles.titleText}>{sampleData.name}</Text>
                    <Text style={styles.subTitleText}>{sampleData.manufacturer}</Text>
                    <Text style={styles.grayText}>{sampleData.composition}</Text>
                    <Text style={[styles.subTitleText, styles.margin_T5]}>Salt Composition</Text>
                    <Text style={styles.grayText}>{sampleData.salt}</Text>
                    <SliderBox
                        images={sampleData.images}
                        sliderBoxHeight={400}
                        dotColor={AppStyles.color.grey}
                        inactiveDotColor={AppStyles.color._placeholder}
                        onCurrentImagePressed={index =>
                            console.log(`image ${index} pressed`)
                        }
                    />
                    <Text style={styles.priceText}>Price <Text style={styles._color}>{sampleData.price}</Text></Text>
                    <Text style={styles.headingText}>{sampleData.uses_heading}</Text>
                    {uses}
                    <Text style={styles.headingText}>{sampleData.side_effect_heading}</Text>
                    {side_effects}
                    <Text style={styles.headingText}>{sampleData.common_effect_heading}</Text>
                    {common_effects}
                    <View style={styles.bt_line}/>
                    <Text style={styles.headingText}>{sampleData.works_heading}</Text>
                    <Text style={styles.grayText}>{sampleData.works}</Text>
                    <Text style={styles.headingText}>Advice</Text>
                    {advices}
                    <Text style={styles.headingText}>SAFETY ADVICE</Text>
                    {safety_advices}
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressTitle}>Address</Text>
                        <Text style={styles.subTitleText}>{sampleData.manufacturer_address}</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 2,
        flexDirection: "row",
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
    justify_flex_start:{
        justifyContent: 'flex-start'
    },
    rightIcon: {
        alignSelf: "stretch",
        textAlign: "right",
        marginRight: 10
    },
    flex: {
        flex: 1
    },
    cardContainer: {
        margin: -10,
        backgroundColor: AppStyles.color.white,
        flex: 1,
    },
    backIcon: {
        width: '20%',
        height: 30,
        marginLeft: 10
    },
    searchIcon: {
        color: AppStyles.color.tint,
    },
    mainContainer: {
        padding: 20,
        marginRight: 30,
        fontSize: AppStyles.fontSize.content,
        color: AppStyles.color.text
    },
    titleText: {
        fontSize: 20,
        color: AppStyles.color.dark_gray,
        fontFamily: AppStyles.fontName.bold,
        // fontWeight: FONT_BOLD.fontWeight,
    },
    subTitleText: {
        fontSize: 14,
        color: AppStyles.color.grey,
        fontFamily: AppStyles.fontName.regular,
    },
    headingText: {
        fontSize: 16,
        marginTop: 20,
        color: AppStyles.color.dark_gray,
        fontFamily: AppStyles.fontName.bold,
    },
    margin_T5: {
        marginTop: 5
    },
    grayText: {
        fontSize: 12,
        color: AppStyles.color.grey,
        fontFamily: AppStyles.fontName.regular,
        paddingTop: 10
    },
    priceText:{
        fontSize: 28,
        marginTop:10,
        color: AppStyles.color.dark_gray,
        fontFamily: AppStyles.fontName.bold,
    },
    m_b10:{
        marginBottom:10
    },
    _color:{
        color: AppStyles.color.tint,
    },
    p_5:{
        padding:5
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    title: {
        fontSize: 14,
        color: AppStyles.color.tint,
        fontFamily: AppStyles.fontName.bold,
    },
    container_left: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    container_text: {
        flex: 1.5,
        marginLeft:5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
    addressContainer:{
        marginTop:10,
        alignSelf:'center',
        justifyContent: 'flex-start', //Centered vertically
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: "solid",
        textAlign:'center',
        borderColor: AppStyles.color.borderColorLight,
        borderRadius: AppStyles.borderRadius.small,
        padding:15,
        marginLeft:20
    },
    addressTitle:{
        fontSize: 16,
        color: AppStyles.color.dark_gray,
        fontFamily: AppStyles.fontName.bold,
        padding:5
    },
    bt_line:{
        marginTop:20,
        marginBottom:20,
        borderBottomColor: AppStyles.color.borderColorLight,
        borderBottomWidth: 1,
    }
});
export default DetailScreen;