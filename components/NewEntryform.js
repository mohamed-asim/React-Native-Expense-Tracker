import { View } from "react-native";
import ButtonYesCancel from "./ButtonYesCancel";
import EntryForm from "./EntryForm";

const NewEntryform = ({
  addEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) => {
  return (
    <View>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonYesCancel addEntry={addEntry} />
    </View>
  );
};

export default NewEntryform;
