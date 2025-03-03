import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white
    },
    headerView:{
        backgroundColor: colors.lightBlue,
        height: horizontalScale(55),
        flexDirection: "row",
        paddingHorizontal: horizontalScale(13),
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerbackView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    cartText: {
        color: colors.black2,
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoBold,
    },
    backButtonView: {
        height: horizontalScale(30),
        width: horizontalScale(30),
        alignItems: "flex-start",
        justifyContent: "center"
    },
    headerBack:{
        height: horizontalScale(15),
        width: horizontalScale(15),
        resizeMode: "contain",
    },
    profileImageView : {
        height: horizontalScale(100),
        width: horizontalScale(100),
        borderRadius: horizontalScale(10),
        borderWidth:1,
        borderColor: colors.gray4,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: horizontalScale(15)
    },
    profileImage :{
        height: horizontalScale(100),
        width: horizontalScale(100),
        borderRadius: horizontalScale(10)
    },
    editIconView: {
        height: horizontalScale(25),
        width: horizontalScale(25),
        backgroundColor: "white",
        borderRadius: horizontalScale(12.5),
        position: "absolute",
        bottom: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
    editIcon: {
        height: horizontalScale(15),
        width: horizontalScale(15),
    },
    updateButton :{
        width:'92%', 
        height: horizontalScale(50),
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: horizontalScale(8),
        marginTop: horizontalScale(20)
    },
    updateText: {
        color: colors.white,
        fontSize: moderateScale(16),
        fontFamily: Fonts.robotoBold
    }
})

export default styles