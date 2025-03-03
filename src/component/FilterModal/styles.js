import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.modalBackground,
    },
    modalView:{
        height: '90%',
        width: "100%",
        backgroundColor: colors.white,
        bottom: 0,
        position: "absolute",
        borderTopLeftRadius: horizontalScale(10),
        borderTopRightRadius: horizontalScale(10)
    },
    headerView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: horizontalScale(15),
        height: horizontalScale(55),
        backgroundColor: colors.lightBlue,
    },
    headerText:{
        color: colors.black2,
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoBold,
    },
    closeView:{
        height: horizontalScale(30),
        width: horizontalScale(30),
        alignItems: "flex-end",
        justifyContent: "center"
    },
    headerClose:{
        height: horizontalScale(20),
        width: horizontalScale(20),
        resizeMode: "contain"
    },
    filterMainView:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent :"center"
    },
    menuView:{
        width: "30%",
        // height: horizontalScale(590),
    },
    menuDetails: {
        width: "70%",
        height: "100%",
    },
    bottomFilterButton:{
        height: horizontalScale(50),
        width: "100%",
        bottom:0,
        position: "absolute",
        flexDirection: "row",
        alignItems : "center",
        justifyContent: "center",
        backgroundColor: colors.white
    },
    resetButtonView : {
        width: "50%",
        alignItems : "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    applyFilterButton :{
        height: "90%",
        width: "80%",
        alignItems: "center",
        justifyContent :"center",
        backgroundColor: colors.blue,
        borderRadius: horizontalScale(10)
    },
    applyFilterText:{
        color: colors.white,
        fontSize: moderateScale(15),
        fontWeight: Fonts.robotoBold
    }
})

export default styles;