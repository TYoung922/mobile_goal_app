import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import FinishedGoals from "./components/FinishedGoals";

export default function App() {
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [myGoals, setMyGoals] = useState([]);
  const [finishedGoals, setFinished] = useState([]);
  const [finishedIsVisible, setFinishedVisibility] = useState(false);

  function startAddGoalHandler() {
    setModalVisibility(true);
  }

  function endAddGoalHandler() {
    setModalVisibility(false);
  }

  function viewFinished() {
    setFinishedVisibility(true);
  }

  function closeFinished() {
    setFinishedVisibility(false);
  }

  function addGoalHandler(enteredGoalText) {
    setMyGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id, text) {
    setFinished((currentFinished) => [
      ...currentFinished,
      { text: text, id: id },
    ]);
    console.log(finishedGoals);
    setMyGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.newGoalBtn}>
          <Button
            title="Add New Goal"
            color="#7913ff"
            onPress={startAddGoalHandler}
          />
        </View>
        <View style={styles.finishedBtn}>
          <Button
            title="View completed goals"
            color="#2e00fc"
            onPress={viewFinished}
          />
        </View>
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <FinishedGoals
          visible={finishedIsVisible}
          onClose={closeFinished}
          listOfFinished={finishedGoals}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={myGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
    borderTopWidth: 1,
    borderColor: "#cda7ff",
    paddingTop: 10,
  },
  newGoalBtn: {
    marginTop: 25,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  finishedBtn: {
    marginTop: 25,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    color: "black",
  },
});
