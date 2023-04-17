import { StyleSheet, View } from "react-native";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = ({ totalIncomes, totalExpenses }) => {
  return (
    <View style={styles.dataWrapper}>
      <DisplayBalance title={"Income"} value={totalIncomes} color={"green"} />
      <DisplayBalance title={"Expense"} value={totalExpenses} color={"red"} />
    </View>
  );
};
const styles = StyleSheet.create({
  dataWrapper: { flexDirection: "row", justifyContent: "space-around" },
});
export default DisplayBalances;
