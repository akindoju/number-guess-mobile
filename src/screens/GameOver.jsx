import { StyleSheet, View, Button, Image } from "react-native";
import BodyText from "../components/BodyText";

const GameOver = ({ guessRounds, userNumber, newGameHandler }) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds: {guessRounds}</BodyText>
      <BodyText>Correct Number: {userNumber}</BodyText>
      <View style={styles.buttonContainer}>
        <Button title="New Game" onPress={newGameHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  buttonContainer: {
    marginTop: 20,
  },
});

export default GameOver;
