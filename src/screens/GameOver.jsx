import { StyleSheet, View, Button, Image, Text } from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

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
      <View style={styles.resultContainer}>
        <BodyText>
          Your phone needed <Text style={styles.highlight}>{guessRounds} </Text>
          tries to guess the number
          <Text style={styles.highlight}> {userNumber}</Text>
        </BodyText>
      </View>
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

  resultContainer: {
    marginHorizontal: 30,
  },

  highlight: {
    color: Colors.primary,
    fontFamily: "lexendDeca",
  },

  buttonContainer: {
    marginTop: 20,
  },
});

export default GameOver;
