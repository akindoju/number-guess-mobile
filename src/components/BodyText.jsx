import { Text, StyleSheet } from "react-native";

const BodyText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: { fontFamily: "lexendDeca", textAlign: "center" },
});

export default BodyText;
