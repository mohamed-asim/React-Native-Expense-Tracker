import { StyleSheet, View, Text } from "react-native";
function MainHeader({ title }) {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
  },
});
export default MainHeader;
