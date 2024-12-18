import { Modal, Button, FlatList, View, Text } from "react-native";

function FinishedGoals(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <View>
          <Button title="Close" onPress={props.onClose} />
        </View>
        <Text>Completed Goals:</Text>

        <FlatList
          data={props.listOfFinished}
          renderItem={(itemData) => {
            return (
              <View>
                <Text>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </Modal>
  );
}

export default FinishedGoals;
