import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    inputView: {
        paddingHorizontal: horizontalScale(15),
        paddingVertical: horizontalScale(10)
    },
    compulsoryStar:{
        color: colors.red
    },
    inputValueContainer:{
        height: horizontalScale(50),
        width: "100%",
        borderWidth:1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(5)
    }
})

export default styles