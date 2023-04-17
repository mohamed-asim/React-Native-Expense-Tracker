import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { EntryDeleteRedux } from "../actions/entries.actions";

function EntryLine({ id, description, value, isExpense = false, editEntry }) {
  const dispatch = useDispatch();
  return (
    <View>
      <View
        style={[
          styles.WrapperContainer,
          {
            borderColor: isExpense == false ? "green" : "maroon",
            marginVertical: 5,
          },
        ]}
      >
        <View style={styles.DescriptionContainer}>
          <Text>{description}</Text>
        </View>
        <View>
          <Text>$ {value}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={styles.ButtonStyles}
            onPress={() => editEntry(id)}
          >
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonStyles}
            onPress={() => dispatch(EntryDeleteRedux(id))}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ButtonStyles: {
    margin: 2,
    borderWidth: 1,
    backgroundColor: "#efefef",
    padding: 3,
  },
  WrapperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
  },
  DescriptionContainer: {
    flexBasis: 100,
  },
});
export default EntryLine;
