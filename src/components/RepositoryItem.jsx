import { View, Image, StyleSheet, Platform } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme.js";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight="bold">FullName: {fullName}</StyledText>
      <StyledText color="secondary">{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
);

export default function RepositoryItem(props) {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
    //el paddingvertical es como paddingtop y paddingbottom
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: "orange",
      default: "purple",
    }),
    alignSelf: "flex-start",
    borderRadius: 4,
    marginVertical: 5,
    //marginvertical es como margintop y marginbottom
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
});
