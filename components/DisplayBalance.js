import { StyleSheet, View, Text } from "react-native";
const DisplayBalance = ({ title, value, color = "black" }) => {
  return (
    <View style={styles.dataContainer}>
      <Text style={styles.smallData} aria-label="">
        {title}
      </Text>
      <Text style={[{ color: color }, styles.Bigdata]} title="" aria-label="">
        {value}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  dataContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  smallData: {
    fontWeight: "bold",
  },
  Bigdata: {
    fontSize: 25,
  },
});
export default DisplayBalance;
