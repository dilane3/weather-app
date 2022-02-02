import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff"
  },
  searchCard: {
    width: "100%",
    paddingHorizontal: 20,
    position: "relative",
    marginTop: 20
  },
  searchInput: {
    width: "100%",
    borderColor: "#cacaca",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    paddingRight: 45,
    fontSize: 16
  },
  searchBtn: {
    position: "absolute",
    top: 12,
    right: 30
  },
  searchResult: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 20
  },
  weatherResultCard: {
    width: Dimensions.get("screen").width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#6541ff",
  },
  location: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20,
    color: "#cfe5ff",
    textAlign: "center"
  },
  country: {
    fontSize: 16,
    fontWeight: "500",
    opacity: .8,
    color: "#cfe5ff",
  },
  weatherDate: {
    fontSize: 14,
    color: "#fff",
    opacity: .7,
    marginTop: 5
  },
  weatherTemperature: {
    fontSize: 60,
    color: "#feffff",
    marginTop: 20
  },
  noResult: {
    width: Dimensions.get("screen").width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 20,
    alignItems: "center",
    borderColor: "#cacaca",
    borderWidth: 1,
    borderRadius: 5
  },
  noResultText: {
    fontSize: 20
  }
})

export default styles