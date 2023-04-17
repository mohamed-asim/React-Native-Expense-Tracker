import { View } from "react-native";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, editEntry }) => {
  return (
    <View>
      {entries.map((entry) => (
        <EntryLine key={entry.id} {...entry} editEntry={editEntry} />
      ))}
    </View>
  );
};

export default EntryLines;
