import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
}
