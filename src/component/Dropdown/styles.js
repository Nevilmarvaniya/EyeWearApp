import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      padding: horizontalScale(16),
    },
    dropdown: {
      borderColor: colors.gray,
      borderWidth: horizontalScale(0.5),
      borderRadius: horizontalScale(5),
      fontFamily: Fonts.robotoRegular
    },
    icon: {
      marginRight: horizontalScale(5),
    },
    label: {
      position: 'absolute',
      backgroundColor: colors.white,
      left: horizontalScale(22),
      top: verticalScale(8),
      zIndex: 999,
      paddingHorizontal: horizontalScale(8),
      fontSize: moderateScale(14),
    },
    placeholderStyle: {
      fontSize: moderateScale(16),
      color: colors.gray,
      paddingStart: horizontalScale(5),
    },
    selectedTextStyle: {
      fontSize: moderateScale(16),
      paddingStart: horizontalScale(5),
      color: colors.black2
    },
    iconStyle: {
      width: horizontalScale(20),
      height: horizontalScale(20),
    },
})

export default styles