import { View } from "react-native";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, deleteEntry, editEntry }) => {
  return (
    <View>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
      ))}
    </View>
  );
};

export default EntryLines;
