import { Platform, StyleSheet, Dimensions } from "react-native";
// import { Configuration } from "../Configuration";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const AppStyles = {
  color: {
    main: "#5ea23a",
    text: "#696969",
    title: "#464646",
    subtitle: "#545454",
    categoryTitle: "#161616",
    tint: "#ff5a66",
    description: "#bbbbbb",
    filterTitle: "#8a8a8a",
    starRating: "#2bdf85",
    borderColor:'#ff5a66',
    borderColorLight:'#ff5a6f80',
    location: "#a9a9a9",
    white: "white",
    facebook: "#4267b2",
    google: "#d34836",
    grey: "grey",
    greenBlue: "#00aea8",
    placeholder: "#a0a0a0",
    background: "#f2f2f2",
    blue: "#3293fe",
    black: "#000000",
    light_grey:"#f1f3f5",
    green:"#309630",
    dark_gray:"#616161",
    _placeholder:"#cccccc"
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16,
    snormal: 15
  },
  buttonWidth: {
    main: "77%"
  },
  loginButtonWidth: {
    main: "40%"
  },
  textInputWidth: {
    main: "80%"
  },
  loginInputWidth: {
    main: "85%"
  },
  dobInputWidth: {
    main: "20%"
  },
  fontName: {
    regular: "OpenSans-Regular",
    bold: "OpenSans-Bold",
    main: "Montserrat-Bold",
    mSemiBold: "Montserrat-SemiBold",
    mRegular: "Montserrat-Regular"
  },
  borderRadius: {
    main: 25,
    small: 5
  }
};

export const AppIcon = {
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginRight: 10
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25
  },
  images: {
    login: require("./../assets/images/login.png"),
    logo: require("../assets/images/logo.png"),
    // logout: require("../assets/icons/shutdown.png")
  },
  icons:{
    back: require("../assets/images/back-arrow.png"),
    filter: require("../assets/images/filter.png"),
    alcohol: require("../assets/icons/alcohol.png"),
    pregrancy: require("../assets/icons/pregrancy.png"),
    breast_feeding: require("../assets/icons/breast_feeding.png"),
    driving: require("../assets/icons/driving.png"),
    liver: require("../assets/icons/liver.png"),
    kidney: require("../assets/icons/kidney.png"),
    edit: require("../assets/images/edit.png"),
    back_arrow_red: require("../assets/images/back_arrow_red.png"),

    
  },
  detail:{
    img_1: require("../assets/images/1.jpg"),
    img_2: require("../assets/images/2.jpg")
  }
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: "row"
  },
  container: {
    padding: 10
  },
  image: {
    justifyContent: "center",
    width: 35,
    height: 35,
    margin: 6
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: "normal",
    fontFamily: AppStyles.fontName.main
  }
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold"
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10
  },
  leftSubtitle: {
    flex: 2
  },
  avatarStyle: {
    height: 80,
    width: 80
  }
});
