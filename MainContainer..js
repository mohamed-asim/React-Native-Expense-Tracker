import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { useSelector } from "react-redux";
import axios from "axios";

import MainHeader from "./components/Mainheader";
import NewEntryform from "./components/NewEntryform";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

export const MainContainer = () => {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const [entry, setEntry] = useState();

  //Redux hooks
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  //Running useEffect when modal is closed to save edited values
  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id]);

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

  //running axios to fetch data
  async function fetchInitialData() {
    const result = await fetch("http://localhost:3005/entries");
    console.log(result);
  }
  useEffect(() => {
    fetchInitialData();
  }, []);
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
        <EntryLines entries={entries} />

        <NewEntryform />
      </ScrollView>

      <ModalEdit isOpen={isOpen} {...entry} />
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
