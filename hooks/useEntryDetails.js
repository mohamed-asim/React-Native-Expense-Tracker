import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { EntryAddRedux, UpdateEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
import { closeEditModal } from "../actions/modals.actions";

function useEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);

  const dispatch = useDispatch();
  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  function updateEntry(id) {
    dispatch(
      UpdateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetEntry();
  }

  function addEntry() {
    dispatch(
      EntryAddRedux({
        id: uuidv4,
        description,
        value,
        isExpense,
      })
    );
    resetEntry();
  }

  //Clear operation after each change
  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }
  return {
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
    addEntry,
    updateEntry,
  };
}

export default useEntryDetails;
