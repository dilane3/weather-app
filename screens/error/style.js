import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {
    width: 200,
    height: 200
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    textAlign: "center"
  },
  info: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    width: 150,
    height: 40,
    backgroundColor: "#6541ff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  btnText: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    color: "#fff"
  }
})

export default styles