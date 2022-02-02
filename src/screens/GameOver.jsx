import {
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const GameOver = ({ guessRounds, userNumber, newGameHandler }) => {
  return (
    <ScrollView>
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
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{guessRounds} </Text>
            tries to guess the number
            <Text style={styles.highlight}> {userNumber}</Text>
          </BodyText>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton onPress={newGameHandler}>New Game</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 30,
  },

  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
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
