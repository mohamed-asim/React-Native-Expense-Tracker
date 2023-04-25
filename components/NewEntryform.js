import { View } from "react-native";
import ButtonYesCancel from "./ButtonYesCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

const NewEntryform = () => {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails();
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
