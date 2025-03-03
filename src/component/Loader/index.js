import React from "react";
import { View, Modal, ActivityIndicator, Text } from "react-native";
import styles from "./styles";
import colors from "../../utils/colors";
import { Strings } from "../../utils/strings";

const Loader = ({ loading }) => {
  return (
    <Modal
      transparent={true}
      animationType={"fade"}
      visible={loading}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <View style={styles.loaderView}>
          <ActivityIndicator
            size="large"
            animating={loading}
            color={colors.red}
          />

          <Text style={styles.loadingText}>{Strings.loading}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;