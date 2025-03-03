import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.95;
const ITEM_MARGIN = 10;

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
    orderFilter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: horizontalScale(15),
        marginVertical: horizontalScale(10)
    },
    searchView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.gray3,
        width: horizontalScale(230)
    },
    searchIcon:{
        height: horizontalScale(20),
        width: horizontalScale(20)
    },
    searchInput:{
        width: "85%",
        height: horizontalScale(40),
        color: colors.black2,
        fontSize: moderateScale(14)
    },
    filterView:{
        width: horizontalScale(100),
        borderWidth:1,
        borderColor: colors.gray3,
        height: horizontalScale(40),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: horizontalScale(10)
    },
    filterIcon: {
        height: horizontalScale(15),
        width: horizontalScale(15)
    },
    filterText:{
        color: colors.black2,
        marginStart: horizontalScale(8),
        fontSize: moderateScale(14)
    },
    dropdown: {
        position: 'absolute',
        top: horizontalScale(147),  // Adjust according to your UI
        left: horizontalScale(260),
        right: 0,
        backgroundColor: 'white',
        elevation: 5,
        zIndex: 10,
        width: horizontalScale(100),
        overflow: "hidden"
    },
    dropdownItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray3,
    },
    dropdownText: {
        fontSize: moderateScale(14),
        color: colors.black2,
    },
    card: {
        width: ITEM_WIDTH,
        marginHorizontal: ITEM_MARGIN / 2,
    },
    image:{
        height: horizontalScale(100),
        width: ITEM_WIDTH,
        borderRadius: horizontalScale(10),
        resizeMode: "stretch"
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: horizontalScale(10),
    },
    dot: {
        width: horizontalScale(8),
        height: horizontalScale(8),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    orderDetailsView: {
        borderWidth:1,
        borderColor: colors.gray3,
        marginHorizontal: horizontalScale(15),
        marginTop: horizontalScale(10)
    },
    orderDetails:{
        marginStart: horizontalScale(10)
    },
    orderStatus:{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: horizontalScale(15),
        paddingVertical: horizontalScale(10),
        width: "100%"
    },
    orderIcon:{
        height: horizontalScale(25),
        width: horizontalScale(25),
        resizeMode: "contain"
    },
    deliverStatus:{
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoBold,
    },
    orderDate:{
        color: colors.gray2,
        fontFamily: Fonts.robotoRegular,
        fontSize: moderateScale(15)
    },
    orderDetailsData: {
        backgroundColor: colors.gray5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: horizontalScale(10),
        paddingVertical: horizontalScale(10),
        marginHorizontal: horizontalScale(15),
        marginBottom: horizontalScale(10),
        borderRadius: horizontalScale(5)
    },
    orderImage:{
        height: horizontalScale(80),
        width: horizontalScale(80),
        borderRadius: horizontalScale(5)
    },
    detailsView: {
        marginStart: horizontalScale(10)
    }
})

export default styles