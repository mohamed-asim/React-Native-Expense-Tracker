import { View } from "react-native";
import ButtonYesCancel from "./ButtonYesCancel";
import EntryForm from "./EntryForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { EntryAddRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";

const NewEntryform = () => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const dispatch = useDispatch();

  function addEntry() {
    dispatch(
      EntryAddRedux({
        id: uuidv4,
        description,
        value,
        isExpense,
      })
    );
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

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
