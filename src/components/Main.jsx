import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, Route, Navigate } from "react-router-native";
import LogInPage from "../pages/Login";

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="/signin" element={<LogInPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </View>
  );
}
