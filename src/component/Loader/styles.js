import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";

export default StyleSheet.create({
    container : {
        flex:1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : colors.modalBackground
    },
    loaderView : {
        backgroundColor: colors.white,
        padding : horizontalScale(15),
        borderRadius: moderateScale(10)
    },
    loadingText :{
        marginTop : horizontalScale(10),
        fontSize : moderateScale(15),
        color : colors.red
    }
})