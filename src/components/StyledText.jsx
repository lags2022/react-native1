import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyledText({
  align,
  children,
  color,
  fontWeight,
  fontSize,
  style,
  ...restOfProps
}) {
  //el resto de props se le pasa al componente Text, esto es para que se puedan pasar props como onPress, etc
  const textStyles = [
    styles.text,
    align === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontWeight === "bold" && styles.bold,
    fontSize === "subheading" && styles.subHeading,
    style,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
