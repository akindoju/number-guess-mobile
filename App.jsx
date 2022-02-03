import { useState } from "react";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import Header from "./src/components/Header";
import GameOver from "./src/screens/GameOver";
import GameScreen from "./src/screens/GameScreen";
import { SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";

const fetchFonts = () => {
  return Fonts.loadAsync({
    lexendDeca: require("./assets/fonts/LexendDeca-Regular.ttf"),
    lexendDecaBold: require("./assets/fonts/LexendDeca-Bold.ttf"),
  });
};

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverhandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverhandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        guessRounds={guessRounds}
        userNumber={userNumber}
        newGameHandler={newGameHandler}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
