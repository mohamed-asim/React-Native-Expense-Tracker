import { View, StyleSheet, Button } from "react-native";
const ButtonYesCancel = ({ addEntry }) => {
  return (
    <View style={styles.buttonGroup}>
      <Button
        title="Yes"
        color="green"
        accessibilityLabel="Yes"
        onPress={() => addEntry()}
      ></Button>
      <Button title="No" color="red" accessibilityLabel="No"></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-evenly",
  },
});
export default ButtonYesCancel;
