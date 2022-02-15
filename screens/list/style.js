import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6541ff",
    paddingHorizontal: 20,
    paddingTop: 10
  },
  title: {
    color: "#cfe5ff",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    marginBottom: 20
  },
  weatherList: {
    flex: 1,
  },
  weatherItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  weatherItemLeft: {
    flex: 1,
    flexDirection: "row"
  },
  weatherItemRight: {
    width: 80,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  weatherItemTime: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  weatherItemFirst: {
    fontSize: 14,
    color: "#cfe5ff",
    fontFamily: "Poppins-Bold"
  },
  weatherItemSecond: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    opacity: .8,
    color: "#cfe5ff",
    marginLeft: 5
  }
})