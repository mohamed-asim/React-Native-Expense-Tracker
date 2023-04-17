import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MainHeader from "./components/Mainheader";
import NewEntryform from "./components/NewEntryform";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  //Globally created states to manage
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  //Redux hooks
  const entries = useSelector((state) => state.entries);

  //Running useEffect when modal is closed to save edited values
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      //   setEntries(newEntries);
    }
  }, [isOpen]);

  //Running for total expenses and income
  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses);
    setTotal(totalIncomes - totalExpenses);
  }, [entries]);

  //Additon operation
  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    // setEntries(result);
    resetEntry();
  }
  //Edition operation
  function editEntry(id) {
    console.log(id);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
      resetEntry();
    }
  }

  //Clear operation after each change
  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <MainHeader title={"Budget Sheet"} />

        <DisplayBalance title={"Income"} value={total} />
        <DisplayBalances
          totalIncomes={incomeTotal}
          totalExpenses={expenseTotal}
        />

        <Text style={styles.Bigdata}>History</Text>
        <EntryLines entries={entries} editEntry={editEntry} />

        <NewEntryform
          addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </ScrollView>

      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 30,
    marginTop: 110,
  },
  Bigdata: {
    fontSize: 25,
  },
});
