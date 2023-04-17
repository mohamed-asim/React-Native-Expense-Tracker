import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EntryForm from "./EntryForm";

function ModalEdit({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={isOpen}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setIsOpen(false)}
              style={styles.modalClose}
            >
              <Text>close</Text>
            </TouchableOpacity>
            <EntryForm
              description={description}
              value={value}
              isExpense={isExpense}
              setDescription={setDescription}
              setValue={setValue}
              setIsExpense={setIsExpense}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalClose: {
    marginBottom: 15,
    alignSelf: "flex-end",
  },
});
export default ModalEdit;
