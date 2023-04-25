import { View } from "react-native";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries }) => {
  return (
    <View>
      {entries.map((entry) => (
        <EntryLine key={entry.id} {...entry} />
      ))}
    </View>
  );
};

export default EntryLines;
