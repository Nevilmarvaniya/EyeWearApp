import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.lightBlue,
        padding: horizontalScale(16),
    },
    headerSubView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth:1,
        borderColor: colors.white
    },
    greeting: {
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoBold,
        color: colors.black2
    },
    headerIcons: {
        flexDirection: "row",
        gap: horizontalScale(16),
    },
    homeCallIcon:{
        height: horizontalScale(23),
        width: horizontalScale(23)
    },
    searchContainer:{
        paddingHorizontal: horizontalScale(16)
    },
    exploreMainView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginVertical: horizontalScale(10)
    },
    headerView: {
        width: '33%',
        borderBottomWidth:1,
        borderColor: colors.gray3,
        height: horizontalScale(50),
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        color: colors.gray3,
        fontFamily: Fonts.robotoBold,
        fontSize: moderateScale(16),
        textAlign: "center"
    }
})

export default styles