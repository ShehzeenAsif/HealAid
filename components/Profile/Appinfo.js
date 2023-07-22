import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

const info = [
  {
    id: "i1",
    title: "Feedback",
    text: "Take a moment to let us know how we are doing",
    icon: "arrow-forward",
  },
  {
    id: "i2",
    title: "Invite friends to HealAid",
    text: "Invite your Friends to use HealAid",
    icon: "arrow-forward",
  },
  {
    id: "i3",
    title: "Version",
    text: "1.0.00",
  },
];

const AppInfo = () => {
  return info.map((item) => {
    return (
      <View style={styles.container} key={item?.id}>
        <View>
          <Text style={styles.titleText}>{item?.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View>
          <Ionicons name={item?.icon} size={25} />
        </View>
      </View>
    );
  });
};

export default AppInfo;

const styles = StyleSheet.create({

  container: {
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue,
  },
  text: {
    fontSize: 14,
    color: "black",
  },
});
