import { useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import NumberComponent from "../components/NumberComponent";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min); //round up number if decimal
  max = Math.floor(max); //round down number if decimal
  const rndNum = Math.floor(Math.random() * (max - min)) + min; //generate number between min and max

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You Know that this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Computer's Guess</Text>
      <NumberComponent>{currentGuess}</NumberComponent>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" />
        <Button title="Higher" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
