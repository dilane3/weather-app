import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 25,
    paddingHorizontal: 20
  },
  bodyContainer: {
    width: "100%",
    height: Dimensions.get("screen").height - 110,
    // backgroundColor: "#eee",
    paddingHorizontal: 20,
    paddingTop: 10
  },
  location: {
    fontSize: 18,
    fontWeight: "bold"
  },
  country: {
    fontSize: 14,
    fontWeight: "500"
  },
  weatherCard: {
    width: "100%",
    height: 350,
    borderRadius: 10,
    backgroundColor: "#6541ff",
    marginTop: 20
  },
  weatherCardTop: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  }, 
  weatherImage: {
    width: 50,
    height: 50
  },
  weatherType: {
    fontSize: 20,
    color: "#cfe5ff",
    marginTop: 10,
    fontWeight: "700"
  },
  weatherDate: {
    fontSize: 12,
    color: "#fff",
    opacity: .7,
    marginTop: 5
  },
  weatherTemperature: {
    fontSize: 60,
    color: "#feffff"
  },
  weatherCardBottom: {
    flex: 1
  },
  weatherItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#bdc8fb",
    borderTopWidth: 1
  },
  weatherItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#bdc8fb",
    paddingLeft: 10
  },
  weatherItemInfo: {
    marginLeft: 5,
  },
  weatherItemType: {
    fontSize: 10,
    color: "#fff",
    opacity: .7,
    lineHeight: 22
  },
  weatherItemValue: {
    fontSize: 10,
    color: "#cfe5ff",
    lineHeight: 22
  }, 
  weatherList: {
    width: "100%",
    height: 150,
    color: "#686868"
  }
});