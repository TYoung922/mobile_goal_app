import { Modal, Button, FlatList, View, Text, StyleSheet } from "react-native";

function FinishedGoals(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Completed Goals:</Text>
        <FlatList
          data={props.listOfFinished}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
        <View style={styles.buttonContainer}>
          <Button title="Close" onPress={props.onClose} color="#7913ff" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
  goalItem: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#cda7ff",
    marginVertical: 8,
  },
  goalText: {
    color: "#333",
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default FinishedGoals;
