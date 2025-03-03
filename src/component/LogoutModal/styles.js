import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.modalBackground,
        alignItems: "center",
        justifyContent: "center"
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: horizontalScale(10),
        padding: horizontalScale(10),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:"90%"
    },
    logoutIcon:{
        marginVertical: horizontalScale(10),
        height: horizontalScale(45),
        width: horizontalScale(45),
        resizeMode: "contain"
    },
    logoutText:{
        color: colors.black2,
        fontFamily: Fonts.robotoBold,
        fontSize: moderateScale(22),
    },
    sureLogout:{
        color: colors.black2,
        fontSize: moderateScale(16),
        fontFamily: Fonts.robotoRegular,
        marginVertical: horizontalScale(10)
    },
    bottomButton:{
        marginVertical: horizontalScale(10),
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        width: "80%"
    },
    cancelButton:{
        height: horizontalScale(40),
        width: horizontalScale(80),
        borderRadius: horizontalScale(5),
        backgroundColor: colors.yellow,
        alignItems: "center",
        justifyContent: "center"
    },
    cancelText:{
        color: colors.white,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoMedium
    },
    logoutButton:{
        height: horizontalScale(40),
        width: horizontalScale(80),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: horizontalScale(5),
        backgroundColor: colors.green1
    }
})

export default styles;