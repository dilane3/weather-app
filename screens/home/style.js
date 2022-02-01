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
    paddingTop: 10
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  country: {
    fontSize: 14,
    fontWeight: "500"
  },
  weatherCard: {
    width: Dimensions.get("screen").width - 40,
    height: 350,
    borderRadius: 10,
    backgroundColor: "#6541ff",
    marginTop: 20,
    marginHorizontal: 20,
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
    color: "#686868",
    // backgroundColor: "red",
    marginTop: 20,
  },
  weatherListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  weatherNext: {
    flexDirection: "row",
    alignItems: 'center'
  },
  weatherListItems: {
    width: Dimensions.get("screen").width,
    // paddingHorizontal: 20,
    marginTop: 20,
  },
  weatherTemperatureItem: {
    height: 80,
    borderRadius: 10,
    marginHorizontal: 5,
    borderColor: "#eee",
    borderWidth: 1,
    paddingHorizontal: 7,
    justifyContent: "space-around"
  },
  weatherTemperatureItemText: {
    fontSize: 12,
    color: "#696969"
  },
  weatherTemperatureItemTextActive: {
    color: "#cfffff",
  }
});