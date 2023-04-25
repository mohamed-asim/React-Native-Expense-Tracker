import {
  KeyboardAvoidingView,
  TextInput,
  View,
  StyleSheet,
  Text,
  Switch,
} from "react-native";

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <View>
      <KeyboardAvoidingView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <TextInput
            style={[styles.input, { flexGrow: 1 }]}
            placeholder="Description"
            aria-label=""
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Value"
            keyboardType="numeric"
            value={String(value)}
            onChangeText={setValue}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.switchContainer}>
        <Text>Is Expense ?</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#FF6D60" }}
          thumbColor={isExpense ? "#d00000" : "#52b788"}
          onValueChange={() => setIsExpense((previousState) => !previousState)}
          value={isExpense}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 2,
    borderWidth: 1,
    padding: 10,
  },
});
export default EntryForm;
